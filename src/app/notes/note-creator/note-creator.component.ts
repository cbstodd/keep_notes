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
        value: '',
        color: '#555555'
    };

    onCreateNote() {
        const { title, value, color } = this.newNote;

        if (title && value) {
            this.createNote.next({ title, value, color });
            console.log(`title: ${title}, value: ${value}, color: ${color}`);
        }

        this.reset();
        this.toggleView(false);
    }

    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: ''
        }
    }

    fullForm:boolean = false;

    toggleView(value:boolean){
        this.fullForm = value;
    }

    // COLOR PICKER
    colors:string[] = ['#dd1111', '#118ad6', '#40B771', '#F3B215', '#ffffff'];

    // SETS THE COLOR PASSED ONTO ngStyle WHEN SELECTED
    onColorSelect(color:string){
        this.newNote.color = color;

    }

}
