import './style.css';
import { display } from '../modules/displayScore.js';
import addNewScore from '../modules/addScore.js';

const submit = document.querySelector('section .add-score form button');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  addNewScore();
});

display();