const input = document.querySelector('input[type=text]');
const button = document.querySelector('input[type=button]');
const trs = document.querySelectorAll('.tbody tr');
let text;
let star = '★';
let arType = new Array();

button.addEventListener('click', function () {
  text = input.value;
  // 초기화
  trs.forEach((el, i) => {
    el.style.background = 'white';
  });
  trs.forEach((el, i) => (el.children[0].innerHTML = el.children[0].innerHTML.replace('★', '')));

  // 배열에 담기!
  trs.forEach((el) => arType.push(el.children[0].innerHTML));

  // 다를 때
  if (arType.indexOf(text) == -1) {
    alert('다시 시도해주세요');
    return;
  }

  // 같을 때
  trs.forEach((el) => {
    if (el.children[0].innerHTML == text) {
      el.children[0].innerHTML = star + el.children[0].innerHTML;
      el.style.background = 'red';
    }
  });
});
