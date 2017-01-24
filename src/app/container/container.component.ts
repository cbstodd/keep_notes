import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'k-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


    constructor() {
    }

    note = { title: "title 1", value: "Value number one" };


    ngOnInit() {
    }


}
