import { addNote, appendNotes } from "./addNote.js";

let noteForm = document.querySelector(".note-form");
  let cancel = document.querySelector('.cancel-btn');

export let noteList = [
  {
    title: "note1",
    category: "Task",
    note: "note text1 3/5/2023 1/2/2023",

  },

  {
    title: "note2",
    category: "Random Thought",
    note: "note text2 2/9/2023",

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