/*
  상속 : 객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능.
        기존의 로직을 수정하고 변경해서 파생된 새로운 객체를 만들 수 있게 해줌.
*/

function Person(name) {
  this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
  return 'My name is '+ this.name;
}

function Programmer(name) {
  this.name = name;
}

Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
  return 'Hello World!';
}

var p1 = new Programmer('Joe');
p1.introduce();//My name is Joe
p1.coding();//Hello World!

/*
  Programmer는 Person의 기능을 가지면서 Person이 가지지 않은 기능인 메소드 coding을 가지고 있음.
*/
