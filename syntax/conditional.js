
var args = process.argv;
// console.log(args);
console.log(args[2]);

console.log('A');
console.log('B');
/*
if(true){
  console.log('C1');
}
if(false){
  console.log('C2');
}
*/
// 위에것도 가능하고
if(args[2] === '1'){    // cmd 창에 1을 치면 숫자가 아니라 문자임 
  console.log('C1');
} else{
  console.log('C2');
}

console.log('D');




// 결과 다음과 같이 나옴(입력값은 seojin)(배열 형식으로 반환됨)

/*
'C:\\Program Files\\nodejs\\node.exe', => node.js런타임이 어디에 위치하고 있는가
'D:\\nodejs\\web2-nodejs\\syntax\\conditional.js', => 실행시킨 이 파일의 경로
'seojin'
*/

// node syntax/conditional.js seojin k8805을 실행
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\nodejs\\web2-nodejs\\syntax\\conditional.js',
  'seojin',
  'k8805'
]
*/

// nodejs에서는 뒤에 입력하는 입력값들(seojin k8805)을 3번째 정보부터 입력값을 주도록 약속 되어 있음.
// 3번째 값을 가지고 오고 싶다면 인덱스를 2부터 주면됨

// 따라서 console.log(args);를 => console.log(args[2]);로 변경 후 실행하면
// seojin으로 나옴
