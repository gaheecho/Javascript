/*
  object
  자바스크립트의 기본 데이터 타입
  일종의 복합체, 여러 값들을 묶어 이름으로 저장하고 값을 가져올 수 있음 --> 이름과 값으로 구성된 프로퍼티들의 정렬되지 않은 집합
  자바스크립트 객체는 객체가 가진 고유 프로퍼티를 유지하는 것 외에 프로토타입이라고 하는 다른 객체의 프로퍼티를 상속 받음.
*/

// string, number, true/false, null/undefined를 제외한 나머지는 객체

var array = [1, 2, 3]
console.log(typeof array); // object

var object = {
  x:1,
  y:2
};
console.log(typeof object); // object

// 객체는 변경이 가능하며 참조를 통해 조작

var x = {
  name: 'gahee', age: 25
};

x.name = 'gaheeCho';
console.log(x); // Object {name: "gaheeCho", age: 25}

var y = x;
console.log(y);

y.age = 26;
console.log(x, y); // Object {name: "gaheeCho", age: 26} Object {name: "gaheeCho", age: 26}


/* 객체 생성하기 */

// 객체 리터럴
var empty = {};

var point = {
  x: 0,
  y: 1
};

// new
var o = new Object(); // Object {}
var a = new Array(); // []
var d = new Date(); // Thu Dec 08 2016 09:51:21 GMT+0900 (KST)
var r = new RegExp("js"); // /js/

//Object.create()
var o1 = Object.create({x:1, y:2});
console.log(o1); //Object {}
                //Object__proto__: Object x: 1, : 2 ---> x, y 프로퍼티를 상속받음

console.log(o1.x, o1.y); // 1, 2

var o2 = Object.create(null); // 프로퍼티를 갖지 않는 새 객체 만들때, 프로퍼티와 메서드가 없음. 이 경우에는 toString() 메서드와 같은 가장 기본적인 메서드 조차 사용할 수 없음.
console.log(o2); // //Object {}

var o3 = Object.create(Object.prototype); // o3은 {} 또는 new Object() 와 같은 객체



/* 프로퍼티 접근 및 설정 */

var book = {
  'main title': 'JavaScript',
  'sub-title': 'The Definitive Guid',
  'for': 'all audiences',
  'author': {
    firstName: 'David',
    surName: 'Flanagan'
  }
};

var author = book.author;
var name = author.surname;
var title = book["main title"];
book.edition = 6;
console.log(book.for); // error 객체 프로퍼티로 예약어 사용하려면 book['for'] 처럼 [] 연산자 사용해야함.
