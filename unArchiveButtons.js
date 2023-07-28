import {noteList} from './app.js';
import {appendNotes} from './addNote.js';
import { archiveList } from './archiveButtons.js';

export function getUnArchiveButtons() {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.unarchive-item'));

    noteDeleteButtons.forEach(button => {

        let id = button.parentNode.parentNode.firstChild.innerText;
        let title = button.parentNode.parentNode.firstChild.nextSibling.innerText;

        button.addEventListener('click', (e) => {
            unArchiveNote(id,title);
        })
    })
}   

function unArchiveNote(id,title){
    for(let i = 0; i < archiveList.length; i++){
        if((i == id - 1) && (archiveList[i].title == title)) {
            noteList.push(archiveList[i])
            archiveList.splice(i, 1);
        }
    }
    appendNotes(archiveList, true);
    appendNotes(noteList);
}