module.exports = {
  id : 'egoing',
  password : '111111'
}


// import 하는곳에서 querydata.id와 같은 형식으로 출력이 가능함
// http://localhost:3000/?id=../password.js 라고 url을 치면
// main.js 에 있는 fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){ 해당 코드라인에서
// data/../password.js 에 들어가게됨
// ..으로 인해 data 상위 디렉토리인 web2-nodejs를 가리키게되고 거기서 password.js 접속하게됨
//* . 이란 현재 디렉토리
//* .. 현재디렉토리의 부모 디렉토리
// 화면에는 비밀번호가 뜸

//=> url을 통해서 내 컴퓨터를 다 돌아다닐수 있게됨

// 해결하기위해서 'nodejs path parse'를 검색
