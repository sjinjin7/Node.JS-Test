console.log(Math.round(1.6));    //자바스크립트가 내장하고 있는 객체
              // 수많은 함수를 관리하는 일종의 디렉토리를 '객체'라고 보면됨
console.log(Math.round(1.4));
//round()는 반올림을 해주는 함수)
// 1.6 과 1.4가 입력되어 있음

// 함수 만들어보기
// 매개변수가 필요함
// argument를 전달받아 함수안으로 전달해주는 매게체를 매개변수(parameter)라고 함 
function sum(first, second){
  console.log(first+second);
}

sum(2,4); // 각각의 입력값 하나하나를 argument라고 함
