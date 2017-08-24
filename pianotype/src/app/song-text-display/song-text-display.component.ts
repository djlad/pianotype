import { Component, OnInit, HostListener} from '@angular/core';
//services
import { PlayNotesService } from '../services/playnotes.service';
import { LoadMusicXmlService } from '../services/load-music-xml.service';
//data models
import { XmlSong } from '../datamodels/xml-song';
import { SingleNote } from '../datamodels/single-note';

/*TODO: modularize this class*/
@Component({
  selector: 'app-song-text-display',
  templateUrl: './song-text-display.component.html',
  styleUrls: ['./song-text-display.component.css']
})
export class SongTextDisplayComponent implements OnInit {
	keyToNoteMap:any;
	noteToKeyMap:any;
	xmlSong:XmlSong;
	parsedSong:SingleNote[];
	songNames:string[] = ['amazing grace', 'Sonata No 1 Movement 1', 'moon light sonata', 'ill be there', 'jingle bells', 'yankee doodle', 'twinkle twinkle', 'happy birthday', 'fur elise', 'haru haru', 'bts save me', 'kum bah ya', 'its you']
	selectedSongName:string = this.songNames[0];

	constructor(
		private playNotesService:PlayNotesService,
		private loadMusicXml:LoadMusicXmlService,
	) {
	}

	generateKeyToNoteMap(noteToSetToLetter:string, letterToSetToNote:string):any {
		/* 
			pick a note that a letter will be mapped to. 
			The rest of the mappings will be generated 
		*/
		let keyboardOrder:string = 'qwertyuiopasdfghjkl;\'zxcvbnm,./';
		let noteOrder:string[] = [	"C0", "D0", "E0", "F0", "G0", "A0", "B0",  
									"C1", "D1", "E1", "F1", "G1", "A1", "B1",
									"C2", "D2", "E2", "F2", "G2", "A2", "B2",
									"C3", "D3", "E3", "F3", "G3", "A3", "B3",
									"C4", "D4", "E4", "F4", "G4", "A4", "B4",
									"C5", "D5", "E5", "F5", "G5", "A5", "B5",
									"C6", "D6", "E6", "F6", "G6", "A6", "B6",
									"C7", "D7", "E7", "F7", "G7", "A7", "B7",
									"C8", "D8", "E8", "F8", "G8", "A8", "B8", 
									"C9", "D9", "E9", "F9", "G9", "A9", "B9"]
		let noteIndex:number = noteOrder.indexOf(noteToSetToLetter);
		let letterIndex:number = keyboardOrder.search(letterToSetToNote);
		let noteLetterDifference:number = noteIndex - letterIndex;

		let outputMap = {};
		let currentLetter:string;
		let currentNote:string;
		for(let i=0;i<keyboardOrder.length;i++){
			currentLetter = keyboardOrder[i];
			currentNote = noteOrder[(i + noteLetterDifference)%noteOrder.length]
			outputMap[currentLetter] = currentNote;
			outputMap[currentNote] = currentLetter;
		}
		return outputMap;
	}

	displayKeyToNoteMap(keyToNotemap) {
		let keyboardOrder:string[] = 'qwertyuiopasdfghjkl;\'zxcvbnm,./'.split('');
		let output:string = '';
		keyboardOrder.map((key)=>{
			output += key + ': ' + keyToNotemap[key] + '\n';
		});
		return output;
	}

	ngOnInit() {
		this.keyToNoteMap = this.generateKeyToNoteMap('C4', 'g');
		console.log(this.keyToNoteMap);
		this.selectSong();
		setTimeout(()=>{console.log(this.selectedSongName)},10000)
	}

	selectSong() {
		this.loadMusicXml.loadSong(this.selectedSongName,(xmlSong)=>{
			this.xmlSong = xmlSong;
			this.parsedSong = this.parseSong(xmlSong);
			this.parsedSong = this.parsedSong.filter((note)=>{return note.backup==0});
		})
	}

	/*TODO: move all parsing to external class*/
	parseSong(xmlSong?:XmlSong):SingleNote[]{
		let xmlSongDom = $.parseXML(xmlSong?xmlSong.xml:this.xmlSong.xml);
		let measures:NodeListOf<Element> = xmlSongDom.getElementsByTagName('measure');
		let outputNotes:SingleNote[] = [];
		for(let i=0;i<measures.length;i++) {
			this.parseMeasure(measures[i], Object(outputNotes));
		}
		this.translateSongNotesToKeys(outputNotes);
		return outputNotes;

	}

	parseMeasure(measure:Element, arrayToAddNotesTo:SingleNote[]):void {
		//TODO: look into unmarshalling this xml
		let divisionsNode = measure.getElementsByTagName('divisions');
		let divisions:number;
		divisions = divisionsNode.length>0?parseInt(divisionsNode[0].textContent):null;

		let noteNodes:NodeList = measure.childNodes;
		let nodeName:string;
		let backup:number = 0;
		for (let i=0;i<noteNodes.length;i++){
			nodeName = noteNodes[i].nodeName;
			if (nodeName === 'note') {
				this.parseNote(noteNodes[i], backup, Object(arrayToAddNotesTo));
			} else if (nodeName === 'backup') {
				backup += parseInt(noteNodes[i].textContent);
			}
		}
	}

	parseNote(note, divisionsToBackup:number, arrayToAddNotesTo:SingleNote[]){
		let pitchElements:NodeListOf<Element> = note.getElementsByTagName('pitch');
		let restElements:NodeListOf<Element> = note.getElementsByTagName('rest');
		let durationElements:NodeListOf<Element> = note.getElementsByTagName('duration');
		let duration:number = durationElements.length>0?parseInt(durationElements[0].textContent):null;
		let pitch:string = 'rest';
		let parsedNote:SingleNote = new SingleNote();
		if (pitchElements.length > 0) {
			pitch = pitchElements[0].getElementsByTagName('step')[0].textContent;
			pitch += pitchElements[0].getElementsByTagName('octave')[0].textContent;
			pitch = pitch.replace(/\s/g,'');
		} else if (restElements.length > 0) {
			pitch = 'RE';
		}

		parsedNote.note = pitch;
		parsedNote.duration = duration;
		parsedNote.backup = divisionsToBackup;
		arrayToAddNotesTo.push(parsedNote);
	}

	translateSongNotesToKeys(songNotes:SingleNote[]){
		songNotes.map((note:SingleNote)=>{
			note.translatedKey = this.keyToNoteMap[note.note];
		});
	}

	playSong(songNotes?:SingleNote[]){
		songNotes = songNotes?songNotes:this.parsedSong;

		console.log('playing song');
		songNotes.map((note:SingleNote)=>{
			//this.notes
		});

	}

	@HostListener('document:keydown', ['$event'])
	handleKeyUp(event: KeyboardEvent) {
		if (!event.repeat) {
			this.playNotesService.pressTone(this.keyToNoteMap[event.key]);
		}
	}

	@HostListener('document:keyup', ['$event'])
	handleKeyDown(event: KeyboardEvent) {
		this.playNotesService.releaseTone(this.keyToNoteMap[event.key]);
	}

}
