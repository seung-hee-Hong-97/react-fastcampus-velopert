const obj = {
    key: 'value',
    'key with value': 'hello',
};

const dog = {
    name: '멍멍이',
    age: 2,
    cute: true,
    children: [
        {
            name: '멍멍이 아이',
            age: 1,
            cute: false,
        },
    ],
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언 맨',
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카',
};

console.log(ironMan);
console.log(captainAmerica);

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);

// 객체 비구조화

function print2({ alias, name, actor }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
    console.log(text);
}

print2(ironMan);
print2(captainAmerica);
