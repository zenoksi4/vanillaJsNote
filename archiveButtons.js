import {noteList} from './app.js';
import {appendNotes} from './addNote.js';

export let archiveList = []
export function getArchiveButtons() {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.archive-item'));

    noteDeleteButtons.forEach(button => {

        let noteTitle = button.parentNode.parentNode.firstChild.innerText;
        button.addEventListener('click', (e) => {
            archiveNote(noteTitle);
        })
    })
}   

function archiveNote(noteTitle){
    for(let i = 0; i < noteList.length; i++){
        if(noteList[i].title == noteTitle) {
            archiveList.push(noteList[i])
            noteList.splice(i, 1);
        }
    }
    appendNotes(archiveList, true);
    appendNotes(noteList);
}