var members = ['vampa', 'sjin', 'jin']; // 배열은 대괄호
console.log(members[1]);
var i = 0;
while(i < members.length){
  console.log('array loop', members[i]);
  i = i + 1;
}


var roles = {
  'programmer':'vampa',
  'designer' : 'sjin',
  'manager' : 'jin'
}  // 객체는 중괄호

console.log(roles.designer);

// 변수 name은 객체의 식별자(key)가 나오도록 약속되어 있음
for(var name in roles){
  console.log('object => ', name, 'value => ', roles[name]);
}
