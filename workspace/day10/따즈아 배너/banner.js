const images_div = document.querySelectorAll('div.image');
const first_temp = document.querySelector('div.first-temp');
const last_temp = document.querySelector('div.last-temp');
const banner = document.querySelector('div.banner');
const prev = document.querySelector('div.prev');
const next = document.querySelector('div.next');
const dots = document.querySelectorAll('li.dot');
// count를 이용하여 배너 움직임
let count = 1;
// 배너가 움직이는 중에 이전 다음 버튼 클릭효과 못하게 하는 flag 선언
let check = true;
// dot[i]를 담을 temp 선언
let temp;

// 클릭해도 빨간색
let clickCheck = false;
let clickCheck2 = false;

// 12개 배너 뒷배경 설정
images_div.forEach((image, i) => {
  image.style.backgroundImage = `url(0${i + 1}.png)`;
});

first_temp.style.backgroundImage = `url(012.png)`;
last_temp.style.backgroundImage = `url(01.png)`;

let slide = setInterval(() => autoSlide(), 6000);

// 닷

// 페이지에 색 들어오기

// 시작 때 첫 li 색 들어오게 하기
changeButtonStyle();

function changeButtonStyle() {
  // 템프 값이 있으면 none인데 오토슬라이드 쪽에 넣어서 6초 간격으로 count 값이 바뀌니 dot의 값도 바뀐다
  // 그 바뀐 dot을 계속 temp에넣어주어서 temp== dot[0 == count-1]이 white였으면
  // 다음 이동 때는 temp== dot[1]가 된다. 그러므로 그전 temp는 위에 if 문에서 배경색이 none으로 바뀌고
  // 아래 새로운 temp가 담기고 temp 스타일은 white가 되는 것을 반복한다!
  if (temp) {
    temp.style.background = 'none';
  }

  temp = dots[count - 1];
  dots[count - 1].style.background = 'white';
}

// 원하는 닷 클릭시 이동

// 마우스 올리면 색깔
dots.forEach((dot, i) => {
  dot.addEventListener('mouseover', function () {
    dot.style.background = 'red';
  });

  //마우스 때면
  dot.addEventListener('mouseout', function () {
    // 올렸다가 내려두면 안사라지게 temp 활용
    dot.style.background = dot == temp ? 'white' : 'none';
  });

  //클릭시 원하는 페이지이동
  dot.addEventListener('click', function () {
    clearInterval(slide);
    count = dot.classList[1];
    banner.style.transform = `translate(${-1600 * count}px)`;
    banner.style.transition = `transform 0.5s`;
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 6000);
  });
});

//오토슬라이드

function autoSlide() {
  check = false;
  banner.style.transform = `translate(${-1600 * ++count}px)`;
  banner.style.transition = 'transform 0.5s';

  if (count == 13) {
    setTimeout(() => {
      banner.style.transition = 'transform 0s';
      banner.style.transform = `translate(-1600px)`;
    }, 700);
    count = 1;
  }

  changeButtonStyle();

  setTimeout(() => {
    check = true;
  }, 700);
}

// 이전버튼

prev.addEventListener('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  banner.style.transform = `translate(${-1600 * --count}px)`;
  banner.style.transition = 'transform 0.5s';

  if (count == 0) {
    setTimeout(() => {
      banner.style.transform = `translate(-19200px)`;
      banner.style.transition = 'transform 0s';
    }, 700);
    count = 12;
  }

  //이전버튼 눌러서 할때마다 변경
  changeButtonStyle();

  slide = setInterval(() => autoSlide(), 6000);

  setTimeout(() => {
    check = true;
  }, 700);
});

// 다음버튼

next.addEventListener('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  banner.style.transform = `translate(${-1600 * ++count}px)`;
  banner.style.transition = 'transform 0.5s';

  if (count == 13) {
    setTimeout(() => {
      banner.style.transform = `translate(-1600px)`;
      banner.style.transition = 'transform 0s';
    }, 700);
    count = 1;
  }

  // 다음버튼 눌러서 배너가 움직일때 함수 적용
  changeButtonStyle();

  slide = setInterval(() => autoSlide(), 6000);

  setTimeout(() => {
    check = true;
  }, 700);
});
