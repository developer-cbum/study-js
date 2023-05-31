function Passenger(name, age, level) {
  this.name = name;
  this.age = age;
  this.level = level;
}

let han = new Passenger('한동석', 20, 1);
let lee = new Passenger('이순신', 19, 2);
let hong = new Passenger('홍길동', 15, 3);

let train = new Array(han, lee, hong);
let trainJSON = JSON.stringify(train);
console.log(JSON.parse(trainJSON);

console.log(trainJSON);
