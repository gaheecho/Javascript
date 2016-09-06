/*
  prototype은 객체의 원형이라고 할 수 있음.
  함수는 객체이므로 생성자로 사용될 함수도 객체.
  객체는 prototype이라는 특수한 프로퍼티를 가질 수 있음.
  prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결됨.
*/

function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var test = new Sub();
console.log(test.ultraProp);//true

/*
  생성자 Sub를 통해 만들어진 test가 Ultra의 프로퍼티 ultraProp에 접근 가능한 이유는 prototype 체인으로 Sub와 Ultra가 연결되어 있기 때문.
  객체 test에서 ultraProp을 찾고 없으면 Sub.prototype.ultraProp ---> Super.prototype.ultraProp ---> Ultra.prototype.ultraProp 식으로 찾음.
*/
