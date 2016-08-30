//const.js

//const는 상수로 선언됨. 값에 읽기 전용 참조를 생성. 재할당 될 수 없음.
//꼭 선언시 초기화 해줘야 함.(변경이 되지 않는 값이기 때문에)

const ONE = 1;
ONE = 2;//error!!!
ONE = 'one';//error!!!
const ONE = "1";//error!!!

//let과 같이 블럭 범위
if(true){
  const one = 1;
  if(true){
    const two = 'two';
    console.log(two); // two
  }
  console.log(one); // 1
  console.log(two); // error!!!
}


//원시형 데이터(string, number, boolean, null, undefined)에서는 상수로 동작하지만 참조형(array, object, function)의 경우 const로 선언하더라도 멤버값을 조작하는게 가능.
const arr1 = [0,1,2,3];
const arr2 = arr1;

arr1.push(4);
console.log(arr1);// [0,1,2,3,4]
console.log(arr2);// [0,1,2,3,4] arr2는 arr1를 참조

arr1 = [5,6,7];// error!!! 조작은 가능하지만 다시 변수를 할당할 때는 오류 발생.

var arr3 = [0,1,2,3];
var arr4 = arr3;
arr3.push(4);
console.log(arr3); // [0,1,2,3,4]
console.log(arr4); // [0,1,2,3,4]

arr3 = [5,6,7];
console.log(arr3); // [5,6,7]

const testArr = [0,1,2];
const arrCopy = [...testArr];

testArr.push(3);
console.log(testArr);//[0,1,2,3]
console.log(arrCopy);//[0,1,2] 참조가 아니라 값을 복사함.

const obj = {one: 1};
const objCopy = Object.assign({}, obj);// 매개변수에 {} 부분은 값을 복사할 경우 이렇게 사용함.
obj.one = "1one";
console.log(obj);// {one: "1one"}
console.log(objCopy);// {one: 1}
