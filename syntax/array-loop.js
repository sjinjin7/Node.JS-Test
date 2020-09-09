var number = [1,400,12,34,5,30, 50];
// 1억개의 데이터를 가졋다고 가정

// 저 데이터들을 어떻게 다 더할 것인가
// => 반복문

var i = 0;
var total = 0;
while(i < number.length){   // number.length을 사용함으로써 동적으로 변수가 변하게됨.
  console.log(number[i]);
  total = total + number[i];
  i = i + 1;
}

console.log(`total : ${total}`);
console.log('total : ' + total);
