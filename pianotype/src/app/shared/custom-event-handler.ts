import { Injectable } from '@angular/core';
/*
extend this class to add custom events to a class
*/
@Injectable()
export class CustomEventHandler {
	private events:{};

	constructor() {
	}

	setEvents(validEventNames:string[]):void {
		/* Sets valid events that can be emitted or registered to */
		this.events = {};
		validEventNames.map((eventName:string)=>{
			this.events[eventName] = [];
		})
	}

	registerCallback(eventName:string, callbackToRegister:()=>void):void {
		/* registers callbacks that will be called when eventName is fired*/
		if (typeof this.events[eventName] !== 'undefined') {
			this.events[eventName].push(callbackToRegister);
		} else {
			this.events[eventName] = [callbackToRegister];
		}
	}

	emitEvent(eventName:string, eventData?):void {
		/* Call all events that are registered to eventName */
		if (this.events[eventName]) {
			if (typeof eventData === 'undefined') {
				this.events[eventName].map((callback)=>{
					callback();
				})			
			} else {
				this.events[eventName].map((callback)=>{
					callback(eventData);
				})
			}
		}
	}
}
