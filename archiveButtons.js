import {noteList} from './app.js';
import {appendNotes} from './addNote.js';

export let archiveList = [];
export function getArchiveButtons() {
    let noteDeleteButtons = Array.from(document.querySelectorAll('.archive-item'));

    noteDeleteButtons.forEach(button => {

        let id = button.parentNode.parentNode.firstChild.innerText;
        let title = button.parentNode.parentNode.firstChild.nextSibling.innerText;

        button.addEventListener('click', (e) => {
            archiveNote(id, title);
        }, {once: true})
    })
}   

function archiveNote(id, title){
    for(let i = 0; i < noteList.length; i++){
        if((i == id - 1) && (noteList[i].title == title)) {
            archiveList.push(noteList[i])
            noteList.splice(i, 1);
        }
    }
    appendNotes(archiveList, true);
    appendNotes(noteList);
}