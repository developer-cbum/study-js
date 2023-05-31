const banner = document.querySelector('div.banner');
const image_divs = document.querySelectorAll('div.banner div');
const buttons = document.querySelectorAll('button');
const page = document.querySelector('#page');
const container = document.querySelector('.container');

let count = 0;
let interId;
let iscilicked = false;

setTimeout;

//페이지업로드시 자동 1번
page.innerHTML = '1/6';

//이미지 로드
image_divs.forEach((el, i) => (image_divs[i].style.backgroundImage = `url(00${i}.png)`));

//페이지 업로드시 자동 실행
interId = setInterval(() => {
  autoSlide();
}, 2000);

//컨테이너 전체영역 마우스 올라가면 버튼 등장
container.addEventListener('mouseover', (e) => {
  buttons.forEach((el) => (el.style.opacity = '1'));
});

container.addEventListener('mouseout', (e) => {
  buttons.forEach((el) => (el.style.opacity = '0'));
});

//왼쪽 클릭
buttons[0].addEventListener('click', (e) => {
  //클릭이 이전에 되어있다면 클릭이벤트 못일어나게 막기
  if (iscilicked) {
    return;
  }

  autoSlide('-');
  //클릭이 일어남
  iscilicked = true;

  //등장시간정도를 지난후 다시 클릭될 수 있게 해주는 함수
  setTimeout(() => {
    iscilicked = false;
  }, 500);

  //버튼을 클릭하면 원래 돌아가던 interval을 제거하고 새롭게 만들기 -> 원래 돌아가던 interval로 인해 한번에 두개넘어가는것을 방지
  if (interId) {
    clearInterval(interId);
    interId = setInterval(() => {
      autoSlide();
    }, 2000);
  }
});

//오른쪽클릭

buttons[1].addEventListener('click', (e) => {
  if (iscilicked) {
    return;
  }

  autoSlide();
  iscilicked = true;
  setTimeout(() => {
    iscilicked = false;
  }, 500);

  if (interId) {
    clearInterval(interId);
    interId = setInterval(() => {
      autoSlide();
    }, 2000);
  }
});

//배너에 마우스가 올라가면 interval삭제 배너클릭시 링크되거나 그 배너를 오래보기위해서
banner.addEventListener('mouseover', (e) => {
  if (!interId) {
    return;
  }
  clearInterval(interId);
  interId = '';
});

//마우스나가면 다시 실행
banner.addEventListener('mouseout', (e) => {
  if (interId) {
    return;
  }
  interId = setInterval(() => {
    autoSlide();
  }, 2000);
});

//배너가 넘어가는 함수 , buho를 통해 왼쪽버튼 클릭시 반대로 움직이게 구현
function autoSlide(buho) {
  banner.style.transform = `translate(${-1500 - 1500 * (buho ? --count : ++count)}px)`;
  banner.style.transition = `transform 0.5s`;

  if (count == 6) {
    count = 0;
    setTimeout(() => {
      banner.style.transform = `translate(${-1500 - 1500 * count}px)`;
      banner.style.transition = ``;
    }, 500);
  }
  if (count == -1) {
    count = 5;
    setTimeout(() => {
      banner.style.transform = `translate(${-1500 - 1500 * count}px)`;
      banner.style.transition = ``;
    }, 500);
  }
  page.innerHTML = `${count + 1}/6`;
}

//버튼을 빨리 누를경우 다 넘어가진 후에 버튼이 눌리도록 해야한다면? 동기적 처리가 여기서 필요한가? =>클릭이벤트 막는방법
//버튼을 누르면 간격 시간 초기화
