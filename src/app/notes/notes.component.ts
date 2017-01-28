import { Component } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
    selector: 'k-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent {

    notes;

    constructor(notesService:NotesService) {
        this.notes = notesService.getNotes();
    }

    onNoteMarked(i:number){
        this.notes.splice(i, 1);
    }

    onCreateNote(note){
        this.notes.push(note);
        console.log(`Created note >>---))>`, note);
    }

}
