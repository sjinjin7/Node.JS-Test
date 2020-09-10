var M = {
  v:'v',
  f:function(){
    console.log(this.v);
  }
}
// module은 약속된 객체
module.exports = M; // mpart.js에 있는 수많은 객체들 중에서 M이라는 객체를 외부에서 사용이 가능하도록 exports하겟다.
