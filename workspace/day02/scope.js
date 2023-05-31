// var x = 20;    // 지역변수와 이름이 겹치지 않는 전역변수
// global.x = 20;   // Node.js에서는 최상위 객체가 global
// window.x = 20;  // 브라우저 최상위 객체 window

// 브라우저라면 window 객체, node라면 global 객체로 알아서 적용시켜준다.
// global과 window객체를 상황에 맞게 사용해주는 전역 객체
// globalThis.x = 20;

// function f() {
//   var x = 10; // 지역변수
//   y = 20; // 전역변수
//   var z = 30; // 지역변수
//   console.log(x);
//   console.log(global.x);
//   console.log(y);
// }

// f();

// console.log(x);
// console.log(y);
// console.log(z); 함수안에 z 지역변수로 선언되어있어서 밖에서 사용하지 못함.

for (let i = 0; i < 10; i++) {

}

console.log(i);
