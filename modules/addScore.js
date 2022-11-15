import {addLocalStorage, getLocalStorage} from './localStorage.js';
import {display} from './displayScore.js';

let name = document.querySelector('section .add-score form input#name');
let score = document.querySelector('section .add-score form input#score');

function addNewScore(){
  addLocalStorage(name.value,score.value);
  display();
}

export {addNewScore};