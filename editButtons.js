import {appendNotes} from './addNote.js';


export function getEditButtons(noteList, isArchive) {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.edit-item'));

    noteDeleteButtons.forEach(button => {

        let noteTitle = button.parentNode.parentNode.firstChild.innerText;

        button.addEventListener('click', (e) => {
            console.log(noteTitle);
        })
    })
}   

function deleteNote(noteTitle, noteList, isArchive){
    for(let i = 0; i < noteList.length; i++){
        if(noteList[i].title == noteTitle) {
            noteList.splice(i, 1);
        }
    }
    !isArchive ? appendNotes(noteList): appendNotes(noteList, isArchive);

}