/*
    함수
*/

//without 함수
const a = 1;
const b = 2;
const sum = a + b;

// 함수화

function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum); // 3

function hello(name) {
  //함수 리터럴
  console.log(`Hello? ${name}`);
}

hello('velopert'); // Hello? velopert

// ES6
// ECMAScript 6 === ES2015

function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score === 89) {
    return 'B+';
  } else if (score >= 80) {
    return 'B';
  } else if (score === 79) {
    return 'C+';
  } else if (score >= 70) {
    return 'C';
  } else if (score === 69) {
    return 'D+';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

const grade = getGrade(100);
console.log(grade);
