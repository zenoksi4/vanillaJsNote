import {appendNotes} from './addNote.js';
import {noteList} from './app.js';

let noteFormEdit = document.querySelector('.note-form-edit');
let cancel = document.querySelector('.cancel-btn');

export function getEditButtons() {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.edit-item'));

    noteDeleteButtons.forEach(button => {

        let noteTitle = button.parentNode.parentNode.firstChild.innerText;

        let notecategory = button.parentNode.parentNode.firstChild.nextSibling.nextSibling.innerText;
        let noteNote = button.parentNode.previousSibling.previousSibling.innerText;

        button.addEventListener('click', () => {
            editValueForm(noteTitle, notecategory, noteNote);
        })
    })
}   

function editValueForm(noteTitle, notecategory, noteNote){

    let title = document.querySelector('.title-input-edit');
    title.value = noteTitle;

    let category = document.querySelector('.category-input-edit');
    category.value = notecategory;

    let note = document.querySelector('.note-input-edit');
    note.value = noteNote;

    noteFormEdit.addEventListener('submit', (e) => {

        submitFormEdit(e)

    });


}
function submitFormEdit(e) {
    
    e.preventDefault();
    let editNoteList = {};

    let title = document.querySelector('.title-input-edit');
    let category = document.querySelector('.category-input-edit');
    let note = document.querySelector('.note-input-edit');


    if(title.value == '' || note.value == ''){
        return alert('fields are empty')
    }else{

        editNoteList.title = title.value;
        editNoteList.category = category.value;
        editNoteList.note = note.value;


    }
    editNote(title.value, noteList, editNoteList);

    cancel.click();
}

function editNote(title, noteList, editNoteList){

    for(let i = 0; i < noteList.length; i++){
        if(noteList[i].title == title) {
            noteList.splice(i, 1, editNoteList);
        }
    }
    console.log(noteList)
    appendNotes(noteList);
}
