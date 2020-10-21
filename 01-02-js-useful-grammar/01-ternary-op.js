//📕 삼항연산자

const array = [];
// let text = '';
// if (array.length === 0) {
//     text = '비어있음';
// } else {
//     text = '비어있지 않음';
// }
// console.log(text);

//삼항연산자를 작성하면 코드가 간결해질 수 있다.

let text =
    array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';
console.log(text);

//삼항연산자 중첩

const condition1 = false;
const condition2 = false;

const value = condition1 ? '와우!' : condition2 ? 'blabla' : 'Foo';

console.log(
    value,
    '얼마든지 삼항연산자 중첩이 가능하나 가급적 1개만 사용... (코드가 난잡해진다)'
);
