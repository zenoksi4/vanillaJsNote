import {appendNotes} from './addNote.js';


export function getDeleteButtons(noteList, isArchive) {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.delete-item'));

    noteDeleteButtons.forEach(button => {

        let noteTitle = button.parentNode.parentNode.firstChild.nextSibling.innerText;
        button.addEventListener('click', (e) => {
            deleteNote(noteTitle, noteList, isArchive);
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