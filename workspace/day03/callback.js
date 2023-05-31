// JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하다.

// let average = add(1, 2, function(result){ return result / 2;});
// let total = add(1, 2);

// console.log(average);
// console.log(total);

// function add(number1, number2, callback){
//     if(callback){
//         return callback(number1 + number2);
//     }
//     return number1 + number2;
// }

// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback 함수로 전달받는다.

// let total = pay("감자", 500, 10, function(name, total){
//     console.log(name, total);
// });

// console.log(`결제 금액: ${total}원`);

// function pay(name, price, count, callback){
//     if(callback){
//         callback(name, price * count);
//     }
//     return price * count;
// }

// 대소비교
// 두 정수 입력 시 첫번째 정수가 크거나 같으면 True 아니면 False이다.
// 큰 값을 다른 함수에서 출력한다.
let result = isBigger(5, 5);
// let result = isBigger(5, 5, function(number1, number2, result){
//     if(!result){
//         return number2;
//     }

//     if(number1 == number2){
//         return "두 수는 같습니다.";
//     }

//     return number1;
// });

function isBigger(number1, number2, callback){
    if(callback){
        return callback(number1, number2, number1 >= number2);
    }
    return number1 >= number2;
}

console.log(result);