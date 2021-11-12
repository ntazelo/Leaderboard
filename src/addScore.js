import axios from 'axios';
import populate from './addRes';
import getScore from './getScore';

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = 'SbGYtCzdioRJWVQKWzbA';
const urlPost = `${URL}${id}/scores/`;

const addPlayer = () => {
  const formSubm = document.querySelector('.form');
  const nameField = document.querySelector('.usr-name');
  const scoreField = document.querySelector('.usr-score');
  formSubm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = { user: nameField.value, score: scoreField.value };
    await axios.post(urlPost, data)
      .then((res) => {
        console.log(res);
        getScore().then((res) => {
          populate(res.data.result);
        }).catch((err) => {
          console.log(err);
        });
      })
      .catch((err) => console.log(err));
    nameField.value = '';
    scoreField.value = '';
  });
};

export default addPlayer;
