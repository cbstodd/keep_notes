import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'k-note-card',
    templateUrl: './note-card.component.html',
    styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

    constructor() {
    }

    @Input() note;
    @Output() marked = new EventEmitter();

    showMark:boolean = false;

    toggleCheck() {
        this.showMark = !this.showMark;
    }

    onMarked() {
        this.marked.next(this.note);
    }

    ngOnInit() {
    }
}
