import {appendNotes} from './addNote.js';
import {noteList} from './app.js';
import { ValidateEdit} from './validate.js';

let noteFormEdit = document.querySelector('.note-form-edit');
let cancel = document.querySelector('.cancel-btn');

export function getEditButtons() {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.edit-item'));

    noteDeleteButtons.forEach(button => {

        let noteId = button.parentNode.parentNode.firstChild.innerText; 
        let noteTitle = button.parentNode.parentNode.firstChild.nextSibling.innerText;
        let notecategory = button.parentNode.previousSibling.previousSibling.previousSibling.innerText;
        let noteNote = button.parentNode.previousSibling.previousSibling.innerText;

        button.addEventListener('click', () => {
            editValueForm(noteTitle, notecategory, noteNote, noteId, button);
        }, {once: true});
    })
}   

function editValueForm(noteTitle, notecategory, noteNote, noteId){

    let title = document.querySelector('.title-input-edit');
    title.value = noteTitle;

    let category = document.querySelector('.category-input-edit');
    category.value = notecategory;

    let note = document.querySelector('.note-input-edit');
    note.value = noteNote;

    noteFormEdit.addEventListener('submit', (e) => {
        e.preventDefault();
        submitFormEdit(noteId);

    }, {once: true});


}
export function submitFormEdit(noteId) {
    
    let editNoteList = {};

    let title = document.querySelector('.title-input-edit');
    let category = document.querySelector('.category-input-edit');
    let note = document.querySelector('.note-input-edit');


    try {
        if(ValidateEdit()){
            throw new Error('fields cannot be empty')
        }else{

            editNoteList.title = title.value;
            editNoteList.category = category.value;
            editNoteList.note = note.value;

        }
    } catch(err) {
        return
    }

    editNote(noteId, noteList, editNoteList);

    cancel.click();
}

function editNote(noteId, noteList, editNoteList){

    for(let i = 0; i < noteList.length; i++){
        if(i == noteId - 1) {
            noteList.splice(i, 1, editNoteList);
        }
    }

    appendNotes(noteList);
}
