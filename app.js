import {addNote, appendNotes} from './addNote.js';

let modal = document.querySelector('.modal');
let noteForm = document.querySelector('.note-form');


export let noteList = [{title: 'note1', category: 'category1',
    note: 'note text1',
    date: new Date(2022, 8, 1)},

    {title: 'note2', category: 'category2',
    note: 'note text2',
    date: new Date(2022, 8, 2)},

    {title: 'note3', category: 'category3',
    note: 'note text3',
    date: new Date(2022, 8, 3)}
];

appendNotes(noteList);

noteForm.addEventListener('submit', (e) => {
    addNote(e, noteList)
});