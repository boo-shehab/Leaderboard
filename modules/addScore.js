import { addLocalStorage } from './localStorage.js';
import { display } from './displayScore.js';

const name = document.querySelector('section .add-score form input#name');
const score = document.querySelector('section .add-score form input#score');

function addNewScore() {
  addLocalStorage(name.value, score.value);
  display();
}

export default addNewScore;