import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//datamodels
import { XmlSong } from '../datamodels/xml-song';
//shared
import { CustomEventHandler } from '../shared/custom-event-handler';
import * as $ from 'jquery';

@Injectable()
export class LoadMusicXmlService extends CustomEventHandler{
	private arrayOfSongs:XmlSong[];
	private songsUrl:string;

	constructor(private http:Http) {
		super();
		/* set valid events in the CustomEventHandler */
		//TODO: move hardcoded event strings to config file or class
		this.setEvents(['song loaded']);
		this.arrayOfSongs = [];
		this.songsUrl = 'assets/music/';
	}

	getSong(title:string, author:string) {
		return this.arrayOfSongs.filter((element)=>{
			return (element.title == title && element.author == author);
		});
  	}

	loadSong(fileName:string, callback?:(loadedSong)=>void){
		this.http	.get(this.songsUrl+fileName+'.xml')
					.toPromise()
					.then((response:Response)=>{
						let body:string = response.text();
						let xmlSongDom = $.parseXML(body);
						let xmlCredits:NodeListOf<Element> = xmlSongDom.getElementsByTagName('credit');
						let lastCreditIndex:number = xmlCredits.length - 1;
						let xmlSong:XmlSong;
						/*if (xmlCredits.length > 0) {
							//TODO: Check for nulls
							xmlSong = new XmlSong
  							(	xmlCredits[0].textContent as string,
  								xmlCredits[lastCreditIndex].textContent as string,
  								body
  							);	
						} else {
							xmlSong = new XmlSong('unknown', 'unknown', body);
						}*/

						xmlSong = new XmlSong('moon', 'bet', body);

						this.arrayOfSongs.push(xmlSong);
						//console.log(this.arrayOfSongs);
						callback(xmlSong);
						this.emitEvent('song loaded');
					});
	}
}
