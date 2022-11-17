// import { addLocalStorage } from './localStorage.js';
import Displaying from './displayScore.js';
import { add } from '../data/api.js';

const user = document.querySelector('section .add-score form input#name');
const score = document.querySelector('section .add-score form input#score');
const displaying = new Displaying();
function addNewScore() {
  const obj = {
    user: user.value,
    score: score.value,
  };
  add(obj);
  displaying.displayScore(obj);
}

export default addNewScore;