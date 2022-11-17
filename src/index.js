import './style.css';
import addNewScore from './modules/addScore.js';
import Displaying from './modules/displayScore.js';
import { get } from './data/api.js';

const submit = document.querySelector('section .add-score form button');
const refersh = document.querySelector('section .leader-board .refresh button');
const displaying = new Displaying();

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addNewScore();
});
get().then((list) => list.json()).then((list) => list.result).then((list) => {
  displaying.display(list);
});
refersh.addEventListener('click', () => {
  get().then((list) => list.json()).then((list) => list.result).then((list) => {
    displaying.display(list);
  });
});