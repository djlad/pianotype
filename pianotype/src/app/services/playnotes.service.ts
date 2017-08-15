import { Injectable } from '@angular/core';
import * as Tone from 'tone';


@Injectable()
export class PlayNotesService {
	/* library for creating synth sounds */
	synth:any;

	constructor() {
		let numberOfTones:number = 6;
		this.synth = new Tone.PolySynth(numberOfTones, Tone.Synth).toMaster();//Look into dependency injection here
		
	}

	playTone(note:string, duration:string):void{
		this.synth.triggerAttackRelease(note, duration);
	}

	pressTone(note:string):void{
		this.synth.triggerAttack(note);
	}

	releaseTone(note:string):void{
		this.synth.triggerRelease(note);
	}
}