HTMLCollection.prototype.forEach = Array.prototype.forEach;
const button = document.getElementById('register');
const arDiv = document.getElementsByClassName('square');

function showCharacter(name) {
  for (let i = 0; i < arDiv.length; i++) {
    arDiv[i].addEventListener('click', function () {
      arDiv[i].innerHTML = name[i];
    });
  }
}

function register(callback) {
  // Array객체를 전역변수에 담을 때 각 요소 사이에 ,가 들어간다.
  // globalThis.name = document.getElementsByName("name")[0].value.split("");
  let text = '';
  let name = document.getElementsByName('name')[0].value;

  arDiv.forEach((div) => (div.innerHTML = ''));
  for (let i = 0; i < 3 - globalThis.name.length; i++) {
    text += '♥';
  }
  name += text;
  callback(name);
}
