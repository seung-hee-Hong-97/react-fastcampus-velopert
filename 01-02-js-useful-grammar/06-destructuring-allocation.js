// 📕 비구조화 할당

//객체 비구조화 할당

const object = { a: 1 };

function print({ a, b = 100 }) {
    console.log(a);
    console.log(b);
}

print(object);

const { a, b = 100 } = object;
console.log(a);
console.log(b);

const animal = {
    name: '멍멍이',
    type: '개',
};

const { name: nickname } = animal;
console.log(nickname);
console.log(animal); // 기존 객체는 유지됨

// 배열 비구조화 할당
const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);

// 객체 깊숙한 곳에 있는 값 꺼내기

const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['Korean', 'English', 'Chinese'],
        },
    },
    value: 5,
};

//차근차근 꺼내는 방법

// const { name, languages } = deepObject.state.information;
// const { value } = deepObject;

// 이번에는 한 번에 여러 값을 다 빼내는 방법
const {
    state: {
        information: {
            name,
            languages: [firstLang, secondLang],
        },
    },
    value,
} = deepObject;

const extracted = {
    name,
    firstLang,
    secondLang,
    value,
};

console.log(extracted);
