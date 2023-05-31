// 상품명, 가격, 재고를 JS객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.
let file = require('fs');

let product = {name: '마우스', price: 10000, stock: 30};
let productJSON = JSON.stringify(product);
let result;

// file.writeFile('product.json', productJSON, 'utf-8', error => {});

result = JSON.parse(file.readFileSync('product.json', 'utf-8', (error) => {}));

console.log(result);