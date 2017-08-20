import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { SongTextDisplayComponent } from './song-text-display/song-text-display.component';

//services
import { HttpModule, Http } from '@angular/http';
import { PlayNotesService } from './services/playnotes.service';
import { LoadMusicXmlService } from './services/load-music-xml.service';

@NgModule({
  declarations: [
    AppComponent,
    SongTextDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
  	PlayNotesService,
    LoadMusicXmlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
