// 📕 Spread 문법

const slime = {
    name: '슬라임',
};

const cuteSlime = {
    ...slime,
    attribute: 'cute',
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple',
};

const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green', // purple 속성을 덮어쓰게 됨
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

//
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기']; // === animals.concat('비둘기')

console.log(animals);
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);
