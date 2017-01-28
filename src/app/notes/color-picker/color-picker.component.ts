import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'k-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {

    @Input() colors:string[] = [];
    @Output() selected       = new EventEmitter();


    // TO HIDE AND SHOW COLOR PALLET SELCTOR.
    isSelectorVisible:boolean = false;
    showSelector(value:boolean){
        this.isSelectorVisible = value;
    }

    selectColor(color:string) {
        this.showSelector(false);
        this.selected.next(color);
        console.log(`Color ${color} was selected`);
    }


}
