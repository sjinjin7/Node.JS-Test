var template = {
  html:function(title, list, body, control){// HTML에 대한 template
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB2 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>

    `;
  },
  list:function(filelist){// list에 대한 template에
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      i = i + 1;
    }

    list = list+'</ul>';
    return list;
  }
}

module.exports = template;
// 또는 module.exports ={}도 가능함
