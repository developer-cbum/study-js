const arTr = document.querySelectorAll('.tr');
const arInput = document.querySelector('input[type=text]');
const button = document.querySelector('input[type=button]');
const arTd = document.querySelectorAll('.td');
let input;
let star = '★';
let arType = ['아동', '청소년', '성인'];
button.addEventListener('click', function () {
  input = arInput.value;
  // 잘못된 값 넣을때
  for (let i = 0; i < arType.length; i++) {
    if (arType.indexOf(input) == -1) {
      arTr.forEach((el, i) => {
        el.style.background = 'white';
      });
      arTd.forEach((el, i) => (el.innerHTML = arType[i]));
      alert('다시 시도해주세요');
      return;
    }
  }
  
    // 초기화
    arTr.forEach((el, i) => {
      el.style.background = 'white';
    });
  
    arTd.forEach((el, i) => (el.innerHTML = arType[i]));
  // 제대로 된 값 넣을 때
  for (let i = 0; i < 3; i++)
    if (input == arTd[i].innerHTML) {
      arTd[i].innerHTML = star + arTd[i].innerHTML;
      arTr[i].style.background = 'red';
    }
});
