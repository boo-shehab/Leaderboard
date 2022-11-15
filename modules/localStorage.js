function getLocalStorage() {
  return localStorage.getItem('leader-board') ? JSON.parse(localStorage.getItem('leader-board')) : [];
}

function addLocalStorage(name, score) {
  const newScore = getLocalStorage();
  const id = newScore.length !== 0 ? newScore[newScore.length - 1].id + 1 : 1;
  newScore.push({ id, name, score });
  localStorage.setItem('leader-board', JSON.stringify(newScore));
}

export { addLocalStorage, getLocalStorage };