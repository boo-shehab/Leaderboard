const ID = 'I0ugL4x2K9pTkncbrX8V';

async function add(newScore) {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  })
    .then((ele) => ele.json());
}
async function get() {
  return fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`);
}
export { add, get };