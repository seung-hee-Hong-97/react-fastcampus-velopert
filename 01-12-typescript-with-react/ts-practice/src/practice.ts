// 자료형 연습
// const message: string = 'hello world';
// console.log(message);

// 무조건 : number을 지정하지 않아도 자동으로 0이 대입되면서 number로 타입이 지정된다.
let count = 0;
// counter = '문자열';

const message: string = 'hello world';
const done: boolean = false;
const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = 10; // 또는  null;
// let color: 'red' | 'orange' | 'yellow' = 'red';
// color = 'yellow';
// color = 'green'; // 할당할 수 없다는 오류가 뜬다

// 함수 연습
function sum(x: number, y: number): number {
    return x + y;
}

const result = sum(1, 2);
console.log(result);

// 숫자 배열 파라미터를 가져와서 숫자의 총 합을 구하는 함수

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing(): void {
    console.log('어쩌고저쩌고');
    // return true; // 오류
}

returnNothing();
