// 변수 (값이 변함)

let value = 1;
console.log(value); // 1

value = 2;
console.log(value); // 2

// 상수 (고정적인 값)

const a = 1;
// a = 2; //불가능

/*
이전에는 var 키워드를 사용했지만, ES6문법을 사용한다면 var 키워드는 권장하지 않는다.
var은 let과 사용할 수 있는 범위가 다르기 때문에 혼동할 우려가 있다.
바벨이라는 도구를 통해 최신 자바스크립트가 구형 브라우저에서도 구동될 수 있도록 사용하므로 
var 대신에 let을 사용할 것을 권장
*/

// 데이터 타입

let number = 100;
let text = 'hello'; // 혹은 쌍따옴표. 홑과 쌍따옴표의 차이는 없다.

let loadingTrue = true; // boolean
let loadingFalse = false; // bolean

let friend = null; // 없다는 의미 from 셜록
let criminal = undefined; //아직 정해지지 않았다 혹은 지정하지 않았다.
