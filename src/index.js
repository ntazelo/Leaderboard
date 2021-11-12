import './style.css';
import addPlayer from './addScore';
import getScore from './getScore';
import populate from './addRes';

const btn = document.querySelector('.btn-upd');
btn.addEventListener('click', () => {
  getScore().then((res) => {
    populate(res.data.result);
  });
});

addPlayer();