const boardUser = document.querySelector('section .leader-board .board ul');

export default class Displaying {
  static special = false;

  // eslint-disable-next-line class-methods-use-this
  displayScore(user) {
    const li = document.createElement('li');
    if (Displaying.special) li.classList.add('special');
    li.innerHTML = `${user.user} : ${user.score}`;
    boardUser.appendChild(li);
  }

  // eslint-disable-next-line class-methods-use-this
  display(users) {
    boardUser.innerHTML = '';
    if (users.length > 0) {
      users.forEach((user) => {
        Displaying.special = !Displaying.special;
        this.displayScore(user);
      });
    }
  }
}