var name = 'egoing';
// 듸워쓰기 방법 1 => 역슬래시
// 역슬래시 줄바꿈은  코드상만 줄바꿈이지 표현상에는 바뀌지 않음
var letter = 'Lorem ' + name + ' \
\
ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + name + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' + name;

// 듸워쓰기 방법 2 => 역슬래시+n
// 약속된 명령
var letter2 = 'Lorem ' + name + '\n\n
ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + name + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' + name;

// 듸워쓰기 방법 3 => template literal(그레이브 사용)
// 이전코드와 비교시 줄바꿈시 특수기호(이스케이프 시퀀스) 사용하지 않아도됨
// 스트링 내부에 변수를 넣고 싶을때 복잡한 고정이 사라짐
// ${}내부에 변수를 넣어도 되고 연산을 넣어도 가능
var letter2 = `Lorem ' ${name}

  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ${name}`;



console.log(letter);
console.log(letter2);
