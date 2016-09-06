/*
  생성자(constructor)는 객체를 만드는 역할을 하는 함수.
  자바스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자라고 할 수 있음.
*/

function Student(name, ko, eng, math){
  this.name = name;
  this.ko = ko;
  this.eng = eng;
  this.math = math;

  this.sum = function() {
    return ko + eng + math;
  }
  this.avg = function() {
    return this.sum() / 3;
  }
  this.output = function() {
    return 'name: '+name+', score: '+this.avg();
  }
}

var s1 = new Student('Joe', 100,90,80,70);//Student {name: "Joe", ko: 100, eng: 90, math: 80}
s1.output();//name: Joe, score: 90
s1.sum();//270
s1.avg();//90

/*
  자바스크립트에서 객체를 만드는 주체는 함수.
  함수에 new를 붙여서 객체를 만듦.
*/
