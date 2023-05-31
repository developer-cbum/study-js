(function(expression){console.log(eval(expression))})("2+3*6-7");
(function(string){console.log(parseInt(string) === 34)})("34");
(function(value){
    console.log(isNaN(value));
    console.log(isFinite(value));
})("hello" / 3);