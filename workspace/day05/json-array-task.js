// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let potato = new Product("감자", 900, 30);
let tomato = new Product("토마토", 1100, 90);
let strawberry = new Product("딸기", 700, 900);

let proucts = new Array(potato, tomato, strawberry);
JSON.stringify(proucts);