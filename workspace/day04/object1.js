// let account = {
//     owner: "한동석",
//     age: 20,
//     password: "1234",
//     account: "110-112-12312412",
//     address1: "서울시",
//     address2: "강남구"
// };

// let account = new Object();

console.log(account);

account.age = 15;
console.log(account.age);

account.bank = "우리은행";
console.log(account);

console.log(account["password"]);

for(let i=1; i<3; i++){
    console.log(account[`address${i}`])
}

account["money"] = 10000;

account.deposit = function(money) {this.money += money;}
account.deposit(30000);
console.log(`${account.money}원`);