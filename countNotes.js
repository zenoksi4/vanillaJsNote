import { noteList } from "./app.js";
import { archiveList } from "./archiveButtons.js";

export function countActive (){
    let categoryCount = document.querySelectorAll('.category-count');

    categoryCount.forEach((category) => {
        let countActive = 0; 
        for(let i = 0; i < noteList.length; i++){

            if(noteList[i].category == category.lastChild.textContent.replace(/ +/g,' ').trim()) {
                countActive++

            }
        }

        category.nextElementSibling.innerText = countActive;
    })
}

export function countArchive (){
    let categoryCount = document.querySelectorAll('.category-count');

    categoryCount.forEach((category) => {
        let countArchive = 0; 
        for(let i = 0; i < archiveList.length; i++){
            if(archiveList[i].category == category.lastChild.textContent.replace(/ +/g,' ').trim()) {
                countArchive++
            }
        }

        category.nextElementSibling.nextElementSibling.innerText = countArchive;
    })
}