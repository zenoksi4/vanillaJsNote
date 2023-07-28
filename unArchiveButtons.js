import {noteList} from './app.js';
import {appendNotes} from './addNote.js';
import { archiveList } from './archiveButtons.js';

export function getUnArchiveButtons() {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.unarchive-item'));
    console.log(archiveList)
    noteDeleteButtons.forEach(button => {

        let noteTitle = button.parentNode.parentNode.firstChild.innerText;
        button.addEventListener('click', (e) => {
            unArchiveNote(noteTitle);
        })
    })
}   

function unArchiveNote(noteTitle){
    for(let i = 0; i < archiveList.length; i++){
        if(archiveList[i].title == noteTitle) {
            noteList.push(archiveList[i])
            archiveList.splice(i, 1);
        }
    }
    appendNotes(archiveList, true);
    appendNotes(noteList);
}