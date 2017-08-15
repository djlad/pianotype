import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { SongTextDisplayComponent } from './song-text-display/song-text-display.component';

//services
import { PlayNotesService } from './services/playnotes.service';

@NgModule({
  declarations: [
    AppComponent,
    SongTextDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	PlayNotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
