//산술연산자
let value = 1; // = 대입 연산자
let a = (1 + 2) * 3 / 4; // 사칙연산(+-*/) 연산자

a++; // 증감연산자... 현재 라인 실행 "후"에 증가
++a; // 증감연산자.. 현재 라인  싫애 "전"에 증가
console.log(--a);
console.log(a--);

a += 100; // a = a + 100
a -= 3; // a = a - 3
a *= 3; // a = a * 3
a /= 3; // a= a  / 3

// 논리연산자
/*
(순서에 맞게...)
    NOT !
    AND &&
    OR ||
*/
// 논리연산자는 사칙연산처럼 처리되는 순서가 정해져 있음.

const a = true;
console.log(a); // true
console.log(!a); // false

const b = true && false;
console.log(a); // false

const c = true || false;
console.log(a); // true

const value = !((true && false) || (true && false) || !false);

// 비교 연산자

let com1 = 1;
let com2 = 1;
let equals = com1 === com2;
console.log(equals); // true
console.log(com1 == com2); // true.. 타입으로는 비교하지 않음.

com1 = false;
com2 = 0;

console.log(com1 == com2); // true
console.log(com1 === com2); // false

com1 = 'a';
com2 = 'b';
console.log(a !== b); // true
console.log(a != b); // false

com1 = 10;
com2 = 15;

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

//문자열 합치기

const str1 = '안녕';
const str2 = '하세요';
console.log(str1 + str2);
