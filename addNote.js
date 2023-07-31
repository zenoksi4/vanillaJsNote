import { getDeleteButtons } from "./deleteButtons.js";
import { noteList } from "./app.js";
import { getArchiveButtons } from "./archiveButtons.js";
import { getEditButtons } from "./editButtons.js";
import { countActive, countArchive } from "./countNotes.js";
import { getUnArchiveButtons } from './unArchiveButtons.js';
import { ValidateSubmit } from './validate.js';

let cancel = document.querySelector(".cancel-btn");
let bodyActiveTable = document.querySelector(".active-table");
let bodyArchiveTable = document.querySelector(".archive-table");

export function addNote(e, noteList) {
  e.preventDefault();

  let newNote = {};

  let title = document.querySelector(".title-input");
  let category = document.querySelector(".category-input");
  let note = document.querySelector(".note-input");


  try {
    if(ValidateSubmit()){
        throw new Error('fields cannot be empty')
    }else{
        newNote.title = title.value;
        newNote.category = category.value;
        newNote.note = note.value;

    }
  } catch(err) {
      return;
  }

  title.value = "";
  note.value = "";


  noteList.push(newNote);
  appendNotes(noteList);
  cancel.click();
}

export function appendNotes(noteList, isArchive = false) {
  let notes = [];
  !isArchive
    ? (notes = Array.from(document.querySelectorAll(".noteItem")))
    : (notes = Array.from(document.querySelectorAll(".noteItem-archive")));

  if (notes.length > 0) {
    notes.forEach((note) => {
      note.remove();
    });
  }

  noteList.map((note, index) => {
    let tr = document.createElement("tr");
    !isArchive
      ? (tr.classList = "noteItem")
      : (tr.classList = "noteItem-archive");

    let tdId = document.createElement('td');
    tdId.classList = 'note-id';
    tdId.innerText = index + 1;

    let tdTitle = document.createElement("td");
    tdTitle.classList = "note-title";

    let titleIcon = document.createElement("div");
    titleIcon.classList = "icon-title";
    titleIcon.innerHTML = addIconTitle(note.category);

    tdTitle.innerText = note.title;
    tdTitle.appendChild(titleIcon);

    let tdcreated = document.createElement("td");
    tdcreated.innerText = new Date().toLocaleDateString("uk");


    let tdcategory = document.createElement("td");
    tdcategory.innerText = note.category;

    let tdNote = document.createElement("td");
    tdNote.classList = "text-ellipsis";
    tdNote.innerText = note.note;

    let tddate = document.createElement("td");
    let dates = note.note?.match(/(\d+)([\/.-])(\d+)([\/.-])(\d+)/g)?.join(",");
    tddate.innerText = dates
      ? dates
      : "";

    let icons = document.createElement("td");
    icons.classList = "icons";

    let tdDelete = document.createElement("div");
    tdDelete.classList = "icon delete-item";
    tdDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';

    if (!isArchive) {
      let tdArchive = document.createElement("div");
      tdArchive.classList = "icon archive-item";
      tdArchive.innerHTML = '<i class="fa-solid fa-folder-plus"></i>';

      let tdEdit = document.createElement("a");
      tdEdit.href = "#myModalEdit";
      tdEdit.classList = "icon edit-item";
      tdEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

      icons.appendChild(tdEdit);
      icons.appendChild(tdArchive);
    }else{
      let unArchive = document.createElement('div');
      unArchive.classList = 'icon unarchive-item';
      unArchive.innerHTML = '<i class="fa-solid fa-folder-minus"></i>';
      icons.appendChild(unArchive);
    }

    icons.appendChild(tdDelete);

    tr.appendChild(tdId);
    tr.appendChild(tdTitle);
    tr.appendChild(tdcreated);
    tr.appendChild(tdcategory);
    tr.appendChild(tdNote);
    tr.appendChild(tddate);
    tr.appendChild(icons);

    !isArchive
      ? bodyActiveTable.appendChild(tr)
      : bodyArchiveTable.appendChild(tr);

    getDeleteButtons(noteList, isArchive);
    getArchiveButtons();
    getUnArchiveButtons();
    getEditButtons();

    countActive();
    countArchive();
  });
}

function addIconTitle(category) {
  if (category === "Task") {
    return '<i class="fa-solid fa-shop"></i>';
  } else if (category === "Random Thought") {
    return '<i class="fa-regular fa-lightbulb"></i>';
  } else {
    return '<i class="fa-solid fa-head-side-virus"></i>';
  }
}
