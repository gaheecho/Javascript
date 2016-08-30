//var.js

// 자바스크립트에는 명시적인 타입이 없음
// 자바스크립트 변수는 어떤 자료형의 값도 담을 수 있고, 한 변수를 다른 타입의 값으로도 할당도 가능.
var foo = 1;
console.log(typeof foo); //number
foo = "one";
console.log(typeof foo); // string
console.log(foo);    // "one"

// var의 유효범위
//			(유효범위 : 어느 범위까지 참조하는지. 즉, 변수와 매개변수(parameter)의 접근성과 생존기간을 뜻함.)
// 전역 유효범위는 코드 내에서 어디서든 변수에 접근가능
// 지역 유효범위는 함수 내에서 변수를 정의하고 접근
// (1)
var scope = "global";
var test = () => {
	var scope = "local";
	console.log(scope);
}
test();  //local
console.log(scope);//global

//(2)
var scope = "global";
var test= () => {
	scope = "local";
	scope2 = "local??";// var 없이 변수를 선언하면 전역 변수로 선언됨.
}
test();
console.log(scope);//local
console.log(scope2);//local??

// (3)
var test2 = () =>{
	var one = 1;
	var test3 = () =>{
		var two = 2;
		var test4 = () =>{
		var sum = one + two;// 중첩 함수에서 내부 함수는 그것이 담긴 함수의 변수에 접근할 수 있다. ---> 이러한 특징 때문에 var는 function-scope라고함.(유효범위가 함수 단위이다.)
		console.log(sum);  // 3
		}
		test4();
	}
	test3();
	//console.log(sum);// error!!
}
test2();
//console.log(one);// error!!
//console.log(two);// error!!
//test3();// error!!

// (4)
//자바스크립트에는 블록 유효범위가 없음.
{
	var foo = 100;
}
console.log(foo);// 100
