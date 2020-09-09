// fileread와 filesync를 비교

var fs = require('fs');

// readFileSync 동기적 방식
/*
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8'); //  경로는 web2-nodejs에서 실행 할 거기때문에 해당 경로를 사용
  // 경로에서 / 인지 \인지 구분 명확히 할것
console.log(result);
console.log('C');
*/

// 비동기적 방식
//syncs가 없음. nodejs는 비동기적 방식을 좀더 선언
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
  console.log(result);
});
// 함수에 세번재 이자가 추가 되는데 return값이 없기 때문에 변수에 담을 수 없음
// nodejsrk 'syntax/sample.txt'파일을 읽는 작업이 끝나면 readFile의 세번재 인자에 있는 함수를 nodejs가 실행시키면서 첫번째 인자에는 에러가 잇다면 err인자를 제공하고, 두번째 파라미터에는 파일의 내용을 인자로서 공급해주도록 약속되어 있음.
console.log('C');


// 결과는 A C B가나옴
// A가 실행된 뒤에 B가 실행되지만 그 결과를 가져오기전에 먼저 C가 반환된 후 B가 실행이 끝나는 데로 B를 반환





// fs.readFile을 다시 해석해보면 nodejs야 너가 가지고잇는 readFile이라는 기능을 이용해서 첫번재 인자의 파일을 읽어와 시간이 좀 걸리니까 작업이 끝난다음에 내가 너한테 전달한 세번재 인자인 함수를 실행시켜 => nodejs는 작업이 끝난후 세번째 인자 함수를 호출
// 세번째 인자가 바로 callback
// 나중에 그 반화녁ㄹ과를 줘!!
