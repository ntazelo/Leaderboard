import axios from 'axios';

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = 'f4qNRrUKtWgEVFl8Y7jY';
const urlPost = `${URL}${id}/scores/`;

export default async function getScore() {
  const data = await axios.get(urlPost);
  return data;
}
