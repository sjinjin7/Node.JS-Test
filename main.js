var http = require('http');
var fs = require('fs');
var url = require('url');

// HTML에 대한 template
function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="/create">create</a>
    ${body}
  </body>
  </html>

  `;
}
// list에 대한 template에
function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i = i + 1;
  }

  list = list+'</ul>';
  return list;
}


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

    //console.log(queryData.id);  // queryData 객체 안에 있는 id
    // 결과 HTML 나옴
    var pathname = url.parse(_url,true).pathname;


    // url을 분석하는 코드(url.parse(_url, true))가 어떠한 내용을 담는지 확인하기 위해
    //console.log(url.parse(_url, true));

    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){ // error, filelist 변수이름일 뿐 아무거나 줘도 상관없음
          //console.log(filelist);  // 파일을 일어오는지 확인하기 위해서
          var title = `Welcome`;
          var description = `Welcome, node.js`;
          var list = templateList(filelist);

          list = list+'</ul>';

          var template = templateHTML(title, list,`<h2>${title}</h2>
          <p>${description}</p>`);  // 기존 var template에 비해 로직에 대한 이해가 더 용이(함수의 이름을 통해) & 코드량도 줄어듬

          response.writeHead(200);
          response.end(template);
        });

      } else {
        fs.readdir('./data', function(error, filelist){ // error, filelist 변수이름일 뿐 아무거나 줘도 상관없음
          //console.log(filelist);  // 파일을 일어오는지 확인하기 위해서
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = templateList(filelist);
            var template = templateHTML(title, list,`<h2>${title}</h2>
            <p>${description}</p>`);

            response.writeHead(200);    // 웹브라우저가 웹서버에 접속 했을 때 웹서버가 응. 그때 웹서버와 웹브라우저 사이에서 잘 됫는지 아니면 에러가 있는지 아니면 이페이지기 다른 곳으로 이사를 갓는지 이러한 중요한 정보를 기계와 기계가 통신하기 위한 아주 간결한 약속.
            // 200 은 성공적으로 전송
            response.end(template); //  queryData 결과 값이 화면에 나옴

          });
        });
      } // if 종료

    } else if(pathname === '/create'){
      fs.readdir('./data', function(error, filelist){
        var title = `WEB - create`;
        var list = templateList(filelist);

        list = list+'</ul>';

        var template = templateHTML(title, list,`
          <form action="http://localhost:3000/process_create" method="POST">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" rows="8" cols="80" placeholder="description"></textarea>
            </p>
            <p>
              <input type = "submit">
            </p>
          </form>

          `);
        response.writeHead(200);
        response.end(template);
      });

    }else {
      response.writeHead(404);
      response.end('Not found');
    }




    //response.end(fs.readFileSync(__dirname + _url));  // 사용자가 접속한 url에 따라서 web2-ndoejs 안에 잇는 파일(1.html 등)을 읽어주는 코드







});
app.listen(3000);
