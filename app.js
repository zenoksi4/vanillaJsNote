import { addNote, appendNotes } from "./addNote.js";

let modal = document.querySelector(".modal");
let noteForm = document.querySelector(".note-form");
let noteFormEdit = document.querySelector('.note-form-edit');
let cancel = document.querySelector('.cancel-btn');

export let noteList = [
  {
    title: "note1",
    category: "Task",
    note: "note text1 3/5/2021",

  },

  {
    title: "note2",
    category: "Random Thought",
    note: "note text2",

  },

  {
    title: "note3",
    category: "Idea",
    note: "note text3",

  },
];

appendNotes(noteList);

noteForm.addEventListener("submit", (e) => {
  addNote(e, noteList);
});

cancel.click()