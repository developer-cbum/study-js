/* 6개의 이미지 + 2개의 temp을 감싸고 있는 div 1개 가져오기 */
const banner = document.querySelector('div.banner');
/* 6장 이미지 div 6개 모두 가져오기 */
const image_divs = document.querySelectorAll('div.banner div.image');
/* 첫번째 temp div 1개 가져오기 */
const first_div = document.querySelector('#first-temp');
/* 마지막 temp div 1개 가져오기 */
const last_div = document.querySelector('#last-temp');
/* 이전버튼 div 1개 가져오기 */
const prev = document.querySelector('div.prev');
/* 다음버튼 div 1개 가져오기 */
const next = document.querySelector('div.next');
/* dot div 6개 다 가져오기 */
const dots = document.querySelectorAll('div.dot');

// 첫 슬라이드로 하기 위해 count 변수 1로 초기화 (-1500px * count =1)
let count = 1;
// 이전 다음 버튼에서 오토슬라이드가 진행될 때는 작동을 못하게 flag 선언
let check = true;
// 점 누를때 배경이 바뀌지 않게 하는 flag 선언
let clickCheck = false;
// 닷 6개중 1개를 담기 위해 temp 선언
let temp;

// 6개 div 각자 백그라운 이미지 주기
image_divs.forEach((image_div, i) => (image_div.style.backgroundImage = `url(00${i + 1}.png)`));
// first-temp에 6번째 이미지 백그라운드로 설정
first_div.style.backgroundImage = `url(006.png)`;
// last-temp에 1번째 이미지 백그라운드로 설정
last_div.style.backgroundImage = `url(001.png)`;

// 2초마다 auto슬라이드
let slide = setInterval(() => autoSlide(), 2000);

// 닷 색 변화
changeButtonStyle();

// 닷 색 변화 함수 부분
function changeButtonStyle() {
  dots.forEach((dot) => (dot.style.background = 'none'));
  dots[count - 1].style.background = '#313131';
  clickCheck = true; //선택 버튼이 변경되는 순간 mouseout 이벤트 막기
}

dots.forEach((dot, i) => {
  dot.addEventListener('mouseover', () => {
    clickCheck = dot.style.background == 'rgb(49, 49, 49)';
    dot.style.background = '#313131';
  });
  dot.addEventListener('mouseout', () => {
    if (clickCheck) {
      return;
    }
    dot.style.background = 'none';
  });

  // 닷으로 원하는 화면가기
  dot.addEventListener('click', () => {
    clickCheck = true;
    clearInterval(slide);
    count = dot.classList[1];
    banner.style.transform = `translate(${-1500 * count}px)`;
    banner.style.transition = 'transform 0.7s';
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
  });
});

// 이전 버튼
prev.addEventListener('click', function () {
  // 오토슬라이드가 진행중이면 버튼 안먹히게하기
  if (!check) {
    return;
  }
  // flag에 false 선언
  check = false;
  // 오토슬라이드 멈춰주기
  clearInterval(slide);
  banner.style.transform = `translate(${-1500 * --count}px)`;
  banner.style.transition = 'transform 0.7s';

  // first-temp(count가 0일때)로 가게 되면 움직이는 효과 시간 0초로 바로 진짜 6번째 이미지 div로 이동하게 설정
  if (count == 0) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = `translate(-9000px)`;
    }, 700);
    count = 6;
  }

  changeButtonStyle();

  // 다시 오토슬라이드 사용
  slide = setInterval(() => autoSlide(), 2000);
  // 움직이는 동안 즉 7초 뒤에 check를 true로 선언해준다. 그러면 버튼누르고 행동이 끝나야 다시 버튼이 먹힌다.
  setTimeout(() => {
    check = true;
  }, 700);
});

// 다음버튼
next.addEventListener('click', function () {
  if (!check) {
    return;
  }

  // 다음버튼 눌렀을때 check에 값을 true값을 false로 바꿔 주어서  다음버튼 클릭이벤트 동안 다시 클릭해도 작동하지 못하게 막는다.
  check = false;
  // 오토슬라이드 멈추기
  clearInterval(slide);
  // 다음 배너로 이동
  banner.style.transform = `translate(${-1500 * ++count}px)`;
  banner.style.transition = 'transform 0.7s';

  // 마지막일 때 빠르게 진짜 위치로 이동
  if (count == 7) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = `translate(-1500px)`;
    }, 700);
    count = 1;
  }

  //닷 색 변경
  changeButtonStyle();

  // 오토슬라이드 다시 시작
  slide = setInterval(() => autoSlide(), 2000);
  // 7초후 check를 true로  버튼 이벤트가 끝나면 다시 버튼을 눌러서 재 실행할 수 있게 flag 값을 true로 해줘야 또 버튼이 작동함
  setTimeout(() => {
    check = true;
  }, 700);
});

// 오토슬라이드
function autoSlide() {
  check = false;
  banner.style.transform = `translate(${-1500 * ++count}px)`;
  banner.style.transition = 'transform 0.7s';

  if (count == 7) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = `translate(-1500px)`;
    }, 700);
    count = 1;
  }
  changeButtonStyle();
  setTimeout(() => {
    check = true;
  }, 700);
}
