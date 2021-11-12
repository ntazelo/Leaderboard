const populate = (data) => {
  const list = document.querySelector('.cont-res-dis');
  list.innerHTML = null;
  data.forEach((el, i) => {
    const userScore = document.createElement('li');
    userScore.className = 'user-scr';
    userScore.textContent = `${el.user}: ${el.score}`;
    userScore.style.textAlign = 'center';
    if (i % 2 === 0) {
      userScore.style.backgroundColor = 'slateblue';
      userScore.style.color = 'white';
    } else {
      userScore.style.backgroundColor = 'white';
      userScore.style.color = 'slateblue';
    }
    list.appendChild(userScore);
  });
};

export default populate;