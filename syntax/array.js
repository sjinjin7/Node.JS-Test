
// 배열
// - 대괄호 안에 데이터를 삽입
// - ','를 통해서 데이터를 구분
// - 삽입되는 데이터느 스트링 타입이든 숫자든 상관 없음

// 배열을 만드는 것만으로는 아무 소용이 없음. 사용을 못하기 대문에
// 호출 할 수 있어야함

// * 배열을 생성하는 방법
// 변수 arr에 배열을 저장
var arr =  ['A', 'B', 'C', 'D']

// *  배열 요소를 꺼내는 방법
// index는 0부터 반드시 시작됨

console.log(arr[0]);
console.log(arr[3]);

// * 배열을 수정 하는 방법
arr[2] = 3;
console.log(arr);

// * 배열의 개수를 알아내는 방법
// 갯수를 새는 경우 0부터 시작하진 않음
// 단지 자릿수의 경우 0번째, 1번째
console.log(arr.length);


// * 길이를 늘리는 방법
// 'javascript array add data' 를 검색해봄
arr.push('E');
console.log(arr);
