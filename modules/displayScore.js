import { getLocalStorage } from './localStorage.js';

const boardUser = document.querySelector('section .leader-board .board ul');

function displayScore(user, special) {
  const li = document.createElement('li');
  if (special) li.classList.add('special');
  li.innerHTML = `${user.name} : ${user.score}`;
  boardUser.appendChild(li);
}

function display() {
  boardUser.innerHTML = '';
  let special = false;
  const users = getLocalStorage();
  if (users.length > 0) {
    users.forEach((user) => {
      special = !special;
      displayScore(user, special);
    });
  }
}

export { displayScore, display };