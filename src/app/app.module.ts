import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesService } from './notes/notes.service';
import { NoteCreatorComponent } from './note-creator/note-creator.component';

@NgModule({
    declarations: [
        AppComponent,
        NotesComponent,
        NavbarComponent,
        NoteCardComponent,
        NotesComponent,
        NoteCreatorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FormsModule
    ],
    providers: [NotesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
