/* 6개의 이미지 + 2개의 temp을 감싸고 있는 div 1개 가져오기 */
const $banner = $('div.banner');
console.log($banner);
/* 6장 이미지 div 6개 모두 가져오기 */
const $image_divs = $('div.banner div.image');
/* 첫번째 temp div 1개 가져오기 */
const $first_div = $('#first-temp');
/* 마지막 temp div 1개 가져오기 */
const $last_div = $('#last-temp');
/* 이전버튼 div 1개 가져오기 */
const $prev = $('div.prev');
console.log($prev);
/* 다음버튼 div 1개 가져오기 */
const $next = $('div.next');
/* dot div 6개 다 가져오기 */
const $dots = $('div.dot');

// 첫 슬라이드로 하기 위해 count 변수 1로 초기화 (-1500px * count =1)
let count = 1;
// 이전 다음 버튼에서 오토슬라이드가 진행될 때는 작동을 못하게 flag 선언
let check = true;
// 점 누를때 배경이 바뀌지 않게 하는 flag 선언
let clickCheck = false;
// 닷 6개중 1개를 담기 위해 temp 선언
let temp;

// 6개 div 각자 백그라운 이미지 주기
$image_divs.each((i, image) => $(image).css('background-image', `url(00${i + 1}.png)`));

// first-temp에 6번째 이미지 백그라운드로 설정
$first_div.css('background-image', `url(006.png)`);
// last-temp에 1번째 이미지 백그라운드로 설정
$last_div.css('background-image', `url(001.png)`);

// 2초마다 auto슬라이드
let slide = setInterval(() => autoSlide(), 2000);

// 닷 색들어오기
changeButtonStyle();

// 이전버튼
$prev.on('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  $banner.css('transform', `translate(${-1500 * --count}px)`);
  $banner.css('transition', 'transform 0.7s');

  if (count == 0) {
    setTimeout(() => {
      $banner.css('transition', 'transform 0s');
      $banner.css('transform', 'translate(-9000px)');
    }, 700);
    count = 6;
  }
  changeButtonStyle();
  slide = setInterval(() => autoSlide(), 2000);
  setTimeout(() => {
    check = true;
  }, 700);
});

// 다음버튼
$next.on('click', function () {
  if (!check) {
    return;
  }
  check = false;
  clearInterval(slide);
  $banner.css('transform', `translate(${-1500 * ++count}px)`);
  $banner.css('transition', 'transform 0.7s');

  // 마지막일 때 빠르게 진짜 위치로 이동
  if (count == 7) {
    setTimeout(() => {
      $banner.css('transition', 'transform 0s');
      $banner.css('transform', 'translate(-1500px)');
    }, 700);
    count = 1;
  }
  changeButtonStyle();
  slide = setInterval(() => autoSlide(), 2000);

  setTimeout(() => {
    check = true;
  }, 700);
});

// 오토슬라이드
function autoSlide() {
  check = false;
  $banner.css('transform', `translate(${-1500 * ++count}px)`);
  $banner.css('transition', 'transform 0.7s');

  if (count == 7) {
    setTimeout(() => {
      $banner.css('transition', 'transform 0s');
      $banner.css('transform', `translate(-1500px)`);
    }, 700);
    count = 1;
  }
  changeButtonStyle();
  setTimeout(() => {
    check = true;
  }, 700);
}

// 닷 구현

function changeButtonStyle() {
  $dots.each((i, dot) => $(dot).css('background-color', 'transparent'));
  $dots.eq(count - 1).css('background-color', 'rgb(49, 49, 49)');
  clickCheck = true;
}

$dots.each((i, dot) => {
  $(dot).on('mouseover', function () {
    clickCheck = $(this).css('background-color') == 'rgb(49, 49, 49)';
    $(this).css('background-color', 'rgb(49, 49, 49)');
  });

  $(dot).on('mouseout', function () {
    if (clickCheck) {
      return;
    }
    $(this).css('background-color', 'transparent');
  });

  $(dot).on('click', function () {
    clickCheck = true;
    clearInterval(slide);
    count = $(this).prop('classList')[1];
    $banner.css('transform', `translate(${-1500 * count}px)`);
    $banner.css('transition', 'transform 0.7s');
    changeButtonStyle();
    slide = setInterval(() => autoSlide(), 2000);
  });
});
