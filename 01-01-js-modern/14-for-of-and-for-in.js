const numbers = [10, 20, 30, 40, 50];

//배열을 순회할 때 사용하는 함수
for (let number of numbers) {
    console.log(number);
}

//for문을 이용해서도 바로 사용할 수 있음.
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 그러나 for-of와 for-in을 혼동해서는 안 된다.

const dog = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2,
};

console.log(Object.entries(dog)); //key ,value 값의 형태로
console.log(Object.keys(dog)); // key값만 반환
console.log(Object.values(dog)); // value값만 반환

console.log('for-in 문');
for (let key in dog) {
    console.log(key, dog[key]);
}
