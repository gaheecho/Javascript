//let.js

//var는 유효범위가 함수단위이지만 let은 블럭 범위
// (1)
{
  let foo = 'local';
}
// console.log(foo);// error!!!

// (2)
var scope = "global";
if(true){
  let scope = "local";
  console.log(scope);// local
}
console.log(scope); // global

// (3)
var test = () => {
  let foo = 'bar';
  console.log(foo); // bar
}
test();
//console.log(foo);// error!!!

//최상위 레벨에서는 var와 같이 동작
let letTest = 'global';
console.log(this.letText);// global

//블럭 내에서 중복 정의 했을 경우 에러 발생
if(true){
  let one = 1;
  let one = '1';
} //Identifier 'one' has already been declared error!!!

//let에는 호이스팅이 적용되지 않음.
        // (호이스칭 : var 선언문 전에 변수를 사용해도 이미 선언된 것으로 간주됨.)
console.log(hoi);//undefined
var hoi = 'hoi';

console.log(hoi2);
let hoi2 = 'hoi2';//error!!!
