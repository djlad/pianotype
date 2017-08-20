import { Injectable } from '@angular/core';

@Injectable()
export class SingleNote {
	note:string;
	duration:number
	/*backup means this note must be played this 
	many divisions before it normally would be*/
	backup:number;
	translatedKey:string;
};
