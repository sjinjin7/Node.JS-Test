var http = require('http');
var fs = require('fs');
var url = require('url');
// require 요구하다
// url(fs,http)이라는 것은 요구 한다는 의미
// 여기서 url(fs, http)는 '모듈'을 의미
// nodejs가 가지고 있는 수많은 기능들을 비슷한것 끼리 모아둔 것(그룹핑) => 모듈
// 따라서 require('url')는 url이라는 모듈을 사용할 것이라는 것을 nodejs에게 선언
// url이라는 모듈은 url이라는 변수를 통해 선언하겟다고 선언

var app = http.createServer(function(request,response){
    var _url = request.url;
    /*
    console.log('url : ' + url);
    // _url 무엇인지 알기위해 => 경로 뒤에 나오는 값들을 표현(주로 query String)
    // 따라서 _url  안의 값을 추출 함으로써 우리가 원하는 표현을 얻어 낼 수 있다.
    */

    var queryData = url.parse(_url, true).query;
    //console.log(queryData);     // queryData에는 무엇이 들어있는지 알기 위해
    // http://localhost:3000/?id=HTML일때 { id: 'HTML' } 객체가 나옴

    console.log(queryData.id);  // queryData 객체 안에 있는 id
    // 결과 HTML 나옴


    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    //response.end(fs.readFileSync(__dirname + _url));  // 사용자가 접속한 url에 따라서 web2-ndoejs 안에 잇는 파일(1.html 등)을 읽어주는 코드
    response.end(queryData.id); //  queryData 결과 값이 화면에 나옴


});
app.listen(3000);
