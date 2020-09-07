var fs = require('fs');
fs.readFile('sample.txt','utf8', function(err, data){
  console.log(data);
});
// 파일 읽는 법
// https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback
