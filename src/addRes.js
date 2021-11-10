export default function styleResField() {
  const resField = document.querySelectorAll('.cont-res-dis li');

  resField.forEach((el, i) => {
    if (i % 2 === 0) {
      el.style.backgroundColor = 'gray';
    } else {
      el.style.backgroundColor = 'white';
    }
  });
}