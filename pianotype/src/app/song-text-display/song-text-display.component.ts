import { Component, OnInit, HostListener} from '@angular/core';
import { PlayNotesService } from '../services/playnotes.service';

@Component({
  selector: 'app-song-text-display',
  templateUrl: './song-text-display.component.html',
  styleUrls: ['./song-text-display.component.css']
})
export class SongTextDisplayComponent implements OnInit {
	keyToNoteMap:any;


	constructor(
		private playNotesService:PlayNotesService
	) {
	}

	generateKeyToNoteMap(noteToSetToLetter:string, letterToSetToNote:string):any{
		/* 
			pick a note that a letter will be mapped to. 
			The rest of the mappings will be generated 
		*/
		let keyboardOrder:string = 'qwertyuiopasdfghjkl;\'zxcvbnm,./';
		let noteOrder:string[] = [	"A0", "B0", "C0", "D0", "E0", "F0", "G0",
									"A1", "B1", "C1", "D1", "E1", "F1", "G1",
									"A2", "B2", "C2", "D2", "E2", "F2", "G2",
									"A3", "B3", "C3", "D3", "E3", "F3", "G3",
									"A4", "B4", "C4", "D4", "E4", "F4", "G4",
									"A5", "B5", "C5", "D5", "E5", "F5", "G5",
									"A6", "B6", "C6", "D6", "E6", "F6", "G6",
									"A7", "B7", "C7", "D7", "E7", "F7", "G7",
									"A8", "B8", "C8", "D8", "E8", "F8", "G8",
									"A9", "B9", "C9", "D9", "E9", "F9", "G9"]
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
		}
		return outputMap;
	}

	displayKeyToNoteMap(keyToNotemap){
		let keyboardOrder:string[] = 'qwertyuiopasdfghijkl;\'zxcvbnm,./'.split('');
		let output:string = '';
		keyboardOrder.map((key)=>{
			output += key + ': ' + keyToNotemap[key] + '\n';
		});
		return output;
	}

	ngOnInit() {
		this.keyToNoteMap = this.generateKeyToNoteMap('C4', 'g');
		console.log(this.displayKeyToNoteMap(this.keyToNoteMap));
	}

	@HostListener('document:keydown', ['$event'])
	handleKeyUp(event: KeyboardEvent) {
		this.playNotesService.pressTone(this.keyToNoteMap[event.key]);
	}

	@HostListener('document:keyup', ['$event'])
	handleKeyDown(event: KeyboardEvent) {
		this.playNotesService.releaseTone(this.keyToNoteMap[event.key]);
	}

}
