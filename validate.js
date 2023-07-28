let regex = /[a-zA-Zа-яА-ЯёЁ\d.,;:&()*%#\s-]/;
let validateMessage = document.querySelector('.validate');
let titleInput = document.querySelector('.title-input');
let noteInput = document.querySelector('.note-input');

let validateMessageEdit = document.querySelector('.validate-edit');
let titleInputEdit = document.querySelector('.title-input-edit')
let noteInputEdit = document.querySelector('.note-input-edit');


export function ValidateSubmit(){

    if (!(regex.test(titleInput.value) && regex.test(noteInput.value))){

        validateMessage.innerHTML = 'Not Valid fields';
        validateMessage.classList.add('is-invalid')
        return true;
    } else{
        validateMessage.classList.remove('is-invalid')
        validateMessage.innerHTML = '';
        return false;

    }
}   

export function ValidateEdit(){

    if (!(regex.test(titleInputEdit.value) && regex.test(noteInputEdit.value))){

        validateMessageEdit.innerHTML = 'Not Valid fields';
        validateMessageEdit.classList.add('is-invalid')
        return true;
    } else{
        validateMessageEdit.classList.remove('is-invalid')
        validateMessageEdit.innerHTML = '';
        return false;

    }
}   