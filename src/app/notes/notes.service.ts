import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {

    getNotes() {
        return [
            {
                title: "title 1 ",
                value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            { title: "title 2", value: "Value number two" },
            {
                title: "title 3",
                value: "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
                title: "title 4",
                value: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"
            },
            {
                title: "title 5",
                value: "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ]
    }


}
