var testFolder = './data';// ./는 현재 파일의 디렉토리
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
  console.log(filelist[0]);
  var i = 0;
  while(i < filelist.length){
    console.log(filelist[i]);
    i += 1;
  }
});

// 결과가 배열로 나타남
// nodejs는 어떤 특정 디렉토리에 있는 파일의 목록을  배열로 반환
