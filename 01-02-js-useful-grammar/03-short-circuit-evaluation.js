// 📕 단축평가 논리계산법

console.log(true && true); // true
console.log(true && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(!3); // false

//

const dog = {
    name: '멍멍이',
};

// function getName(animal) {
//     if (animal) {
//         return animal.name;
//     }
//     return undefined;
// }

function getName(animal) {
    return animal && animal.name;
}

const name = getName(dog);
console.log(name);

console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

//
const object = { name: 'gildong' };
const obName = object && object.name;
console.log(obName);

// OR 연산자

const namelessDog = {
    name: '', // falsy
};

// function getName(animal) {
//     const name = animal && animal.name;
//     if (!name) {
//         return '이름이 없는 동물입니다.';
//     }
//     return name;
// }

function getName(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const dogName = getName(namelessDog);
console.log(dogName);

console.log(false || 'hello'); // 'hello'
console.log('' || '이름없다'); //이름없다
console.log(null || '널이다');
console.log(undefined || 'undefined이다');
console.log(0 || '0이다');
console.log(1 || '음?'); // 1
