const ON = 1;

function testConst() {
  //   ON = 2; 상수값은 변경 불가능
  console.log(ON);
}

function testLet() {
  let data = 10;
  //   let data = 20;
  data = 20;
}

testLet();

testConst();
