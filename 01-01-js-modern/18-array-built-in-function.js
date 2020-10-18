//splice: 원본 배열을 건드림
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
console.log(numbers, '중', index, ' 제거... ');
const spliced = numbers.splice(index, 1);
console.log(numbers, '삭제된 원소는 spliced =', spliced);

//slice: 기존의 배열을 건드리지 않고 파라미터 넘기는 값이 다르다
const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);

//shift
let value = numbers.shift(); // 맨 앞에서 제거
console.log(value);
console.log(numbers);

//pop
value = numbers.pop(); // 맨 뒤에서부터 요소 제거
console.log(value);

//unshift
numbers.unshift(5); // 맨 앞에 요소 추가하기

//push
numbers.push(99); //맨 뒤에 요소 추가하기

//concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let concated = arr1.concat(arr2); // concat은 기존의 배열을 수정하지 않는다
console.log(concated);
concated = [...arr1, ...arr2];
console.log(concated);

//join
//배열 안에 있는 값을 문자열 형태로 합칠 떄 사용한다
console.log(concated.join());
console.log(concated.join(' '));
console.log(concated.join('그리고'));
