import { Injectable } from '@angular/core';

@Injectable()
export class XmlSong {
	xml:string;
	title:string;
	author:string;

	constructor(title, author, xml){
		this.title = title;
		this.author = author;
		this.xml = xml;
	}
}