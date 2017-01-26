import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'k-note-creator',
    templateUrl: './note-creator.component.html',
    styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent {
    @Output() createNote = new EventEmitter();
    
    newNote = {
        title: '',
        value: ''
    };

    onCreateNote() {
        const { title, value } = this.newNote;

        if (title && value) {
            this.createNote.next({ title, value });
        }

        this.reset();
        this.toggleView(false);
    }

    reset() {
        this.newNote = {
            title: '',
            value: ''
        }
    }

    fullForm:boolean = false;

    toggleView(value:boolean){
        this.fullForm = value;
    }

}
