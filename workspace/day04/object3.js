// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다.
// 프로토타입은 함수로 선언하여 사용하며 반드시 대문자로 시작한다.

function User(name, age, level){
    this.name = name;
    this.age = age;
    this.level = level;
}

let train = new Object();

let hong = new User("홍길동", 20, 1);
let lee = new User("이순신", 40, 2);
let jang = new User("장보고", 19, 3);

train.passenger1 = hong;
train.passenger2 = lee;
train.passenger3 = jang;

console.log(train);
console.log(train.passenger1.name);