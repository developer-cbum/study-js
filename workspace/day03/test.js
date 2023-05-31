function printTemp(temp, number, callback) {
  if (callback) {
    return callback(temp, number);
  }
  return temp, number;
}

let addTemp = printTemp('%', 5, function (temp1, number1) {
  let answer = '';
  for (let i = 0; i < number1; i++) {
    answer += temp1;
  }
  return answer;
});

console.log(addTemp);
