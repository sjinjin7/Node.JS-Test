// 프로그래밍을 한다는 것은 크게 두가지
// 1. data  2. data를 처리하는 방법

// array, object  - data를 체계적으로 관리 할 수 있게 해주는 도구
// 처리해야하는 코드가 많아지면 연관된것을 그룹핑 하기위해 "함수"를 사용함

function f1(){
  console.log(1+1);
  console.log(1+2);
}

// 자바스크립트에서 함수는 굉장히 독특한 특성을 가짐
// 함수는 처리해야할 일에 대한 어떠한 정보를 담고 있는 구문(statemente)이면서 동시에 값 입니다.
// 함수를 변수에 넣을수 잇다면 값 이라고 생각해보자.

//var i = if(true){console.log(1)};
// 해당 명령문은 에러가남 if 조건문은 값이 아니기대문에

// var w = while(true){console.log(1)};
// 해당 명령문 또한 에러가남. while문은 값이 아니기 때문에

// 그렇다면 함수는 값이 될 수 있을까?
var f = function(){
  console.log(1+1);
  console.log(1+2);
}

console.log(f);
f();
// 실행이됨
// JS에서 function이라는 statement가 다른 satement(if, while ect)와 다르게 값이 될 수 있음
// 처리 방법 들을 담고있는 구문이면서 그것 자체가 값이 될 수 있다.


// 함수는 서로 연관된 데이터를 그룹핑하는 객체
[f]
// 배열에f라는 원소가 담겻는데 f는 함수
var a = [f]
a[0]();
// 실행이됨
// 배열에 원소로서 함수가 존재 할 수가 있음


var o ={
  func:f
}
o.func();
// 실행이됨
// 객체에서 property로서 함수가 존재 가능

// 정리하면 배열과 객체는 모두 서로 연관된 데이터를 담는 그릇인데 Js에서는 처리방법을 그룹핑하는 function조차도 데이터이기도하기때문에 배열과 객체에 담을 수가 있다.
