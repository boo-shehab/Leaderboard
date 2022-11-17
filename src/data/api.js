const ID = 'I0ugL4x2K9pTkncbrX8V';

const add = async (newScore) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  })
    .then((ele) => ele.json());
};
const get = async () => fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`);
export { add, get };