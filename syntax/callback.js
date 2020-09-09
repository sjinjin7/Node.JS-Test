/*
function a(){
  console.log('A');
}

a();
*/

/*
// 익명함수
// 위의 함수와 동일함 단지 함수의 이름이 없음
function(){
  console.log('A');
}
*/

// 아래의 방식도 가능
// a라는 변수에 값으로서 함수를 정의.
// js에서는 함수가 값이라는 것을 의미
var a = function(){
  console.log('A');
}
a();
// a 뒤의 '()'를 붙임으로써 a가 담고 있는 익명함수를 실행시킬 수 있음


// callback 함수 만들어보기

function slowfunc(callback){    // 굉장히 실행이 오래걸리는 함수가 이싿고 가정
  // 이 함수의 기능이 실행이 끝난다음에 이기능을 실행한 쪽에게 함수의 실행이 끝낫으니 그 다음일을 하세요를 하기위해 인자에 'callback'을 주고 callback()를 실행
  callback();
}

slowfunc(a);
// slowfunc라는 오랜시간이 걸리는 함수가 실행되고 callback 파라미터는 a가 가리키는 익명함수를 가리키게됨. callback()을 통해서 익명함수가 실행됨
