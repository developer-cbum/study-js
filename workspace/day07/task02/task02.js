let text;
const texts = document.querySelector('.input');
const button = document.querySelector('input[type=button]');
const p = document.getElementById('answer');
let hangle = '공일이삼사오육칠팔구점';

button.addEventListener('click', function () {
  let result = '';
  p.innerHTML = '';
  text = texts.value;

  for (let i = 0; i < text.length; i++) {
    if (isNaN(text)) {
      p.innerHTML = '숫자만입력해주세요';
      return;
    }
  }

  Array.from(text)
    .map((i) => (i == '.' ? hangle[10] : hangle[i]))
    .forEach((i) => (p.innerHTML = result += i));
});
