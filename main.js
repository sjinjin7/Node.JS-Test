var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var template = require('./lib/template.js');
var path = require('path');
// 사용자로부터 경로가 들어오는 모든 곳을 변경해주어야함
// 외부에서 들어온 정보와, 외부에서 들어온 정보가 밖으로 나갈때 모두 오염될수 있기 때문에, 모든 것을 철저히 의심해야함.

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

          var list = template.list(filelist);

          list = list+'</ul>';

          var html = template.html(title, list,`<h2>${title}</h2>
          <p>${description}</p>`,
          `<a href="/create">create</a>`);  // 기존 var template에 비해 로직에 대한 이해가 더 용이(함수의 이름을 통해) & 코드량도 줄어듬

          response.writeHead(200);
          response.end(html);
        });



      } else {
        fs.readdir('./data', function(error, filelist){ // error, filelist 변수이름일 뿐 아무거나 줘도 상관없음
          //console.log(filelist);  // 파일을 일어오는지 확인하기 위해서
          var filteredId = path.parse(queryData.id).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = template.list(filelist);
            var html = template.html(title, list,`<h2>${title}</h2>
            <p>${description}</p>`,
            `<a href="/create">create</a>
             <a href="/update?id=${title}">update</a>
             <form action="delete_process" method="post" onsubmit="asdf">
              <input type="hidden" name="id" value="${title}">
              <input type="submit" value="delete">
             </form>`);
            // update url에 쿼리스트링을 통해서 어떠헌 데이터를 수정할 것인지를 설계

            response.writeHead(200);    // 웹브라우저가 웹서버에 접속 했을 때 웹서버가 응. 그때 웹서버와 웹브라우저 사이에서 잘 됫는지 아니면 에러가 있는지 아니면 이페이지기 다른 곳으로 이사를 갓는지 이러한 중요한 정보를 기계와 기계가 통신하기 위한 아주 간결한 약속.
            // 200 은 성공적으로 전송
            response.end(html); //  queryData 결과 값이 화면에 나옴

          });
        });
      } // if 종료

    } else if(pathname === '/create'){
      fs.readdir('./data', function(error, filelist){
        var title = `WEB - create`;
        var list = template.list(filelist);

        list = list+'</ul>';

        var html = template.html(title, list,`
          <form action="/create_process" method="POST">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" rows="8" cols="80" placeholder="description"></textarea>
            </p>
            <p>
              <input type = "submit">
            </p>
          </form>

          `, '');
        response.writeHead(200);
        response.end(html);
      });

    } else if(pathname === '/create_process'){
      var body = '';
      // request는 createserver의 콜백함수
      // 이벤트
      request.on('data', function(data){
      //  웹 브라우저가 POST방식으로 데이터를 전송할때 데이터가 엄청나게 많으면 그 데이터를 한번에 처리할 경우 컴퓨터에 무리가 감. 그래서 nodejs에서는 POST방식으로 전송되는 데이터가 많을 경우를 대비해서 request.on 방식을 제공하고 있는데 'data'부분은 특정한 양 들을 서버쪽에서 수신할대마다 서버는 콜백함수를 호출하도록 약속 되어있음. 호출할때 data라는 인자를 통해서 수신한 정보를 주기로 약속함.
        body = body + data;

      });
      //이벤트
      request.on('end', function(){
        // 정보가 들어오다 더이상 들어올 정보가 없으면 해당 콜백함수가 호출 되도록 약속되어 있음. 다시 말해 해당 하뭇에 들어오는 것은 정보 수신이 끝낫다고 바도 됨.
          // post변수에 전송받은 데이터가 담김
          var post = qs.parse(body);
          //console.log(post);
          //console.log(post.title);
          var title = post.title;
          var description = post.description;
          fs.writeFile(`data/${title}`,description, 'utf8', function(err){
            response.writeHead(302,{Location: `/?id=${title}`});  // 리다이렉트
            response.end('success');
          });
      });

    } else if(pathname === '/update'){
      fs.readdir('./data', function(error, filelist){ // error, filelist 변수이름일 뿐 아무거나 줘도 상관없음
        //console.log(filelist);  // 파일을 일어오는지 확인하기 위해서
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = templateList(filelist);
          var template = templateHTML(title, list,
            `
            <form action="/update_process" method="POST">
              <input type="hidden" name="id" value="${title}">
              <p><input type="text" name="title" placeholder="title" value="${title}"></p>
              <p>
                <textarea name="description" rows="8" cols="80" placeholder="description">${description} </textarea>
              </p>
              <p>
                <input type = "submit">
              </p>
            </form>
            `,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
          // update url에 쿼리스트링을 통해서 어떠헌 데이터를 수정할 것인지를 설계

          response.writeHead(200);    // 웹브라우저가 웹서버에 접속 했을 때 웹서버가 응. 그때 웹서버와 웹브라우저 사이에서 잘 됫는지 아니면 에러가 있는지 아니면 이페이지기 다른 곳으로 이사를 갓는지 이러한 중요한 정보를 기계와 기계가 통신하기 위한 아주 간결한 약속.
          // 200 은 성공적으로 전송
          response.end(template); //  queryData 결과 값이 화면에 나옴

        });
      });
    } else if(pathname === '/update_process'){
      var body = '';
      // request는 createserver의 콜백함수
      // 이벤트
      request.on('data', function(data){
        body = body + data;

      });
      request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          var title = post.title;
          var description = post.description;
          fs.rename(`data/${id}`, `data/${title}`, function(error){
            fs.writeFile(`data/${title}`,description, 'utf8', function(err){
              response.writeHead(302,{Location: `/?id=${title}`});
              response.end();
            });
          });
          //console.log(post);  //테스트위해

      });
    } else if(pathname === '/delete_process'){
      var body = '';
      request.on('data', function(data){
        body = body + data;

      });
      request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          var filteredId = path.parse(id).base;
          fs.unlink(`data/${filteredId}`, function(error){
            response.writeHead(302,{Location: `/`});
            response.end();
          });

      });
    } else {
      response.writeHead(404);
      response.end('Not found');
    }




    //response.end(fs.readFileSync(__dirname + _url));  // 사용자가 접속한 url에 따라서 web2-ndoejs 안에 잇는 파일(1.html 등)을 읽어주는 코드







});
app.listen(3000);
