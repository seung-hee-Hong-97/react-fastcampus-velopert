// 📕 Rest 문법
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple',
};

const { color, ...rest } = purpleCuteSlime;
console.log(color); // purple
console.log(rest); // { name: '슬라임', attribute: 'cute' }

const { attribute, ...slime } = purpleCuteSlime;
console.log(slime);

//
const numbers = [1, 2, 3, 4, 5];

const [one, two, ...rs] = numbers;
console.log(one);
console.log(two);
console.log(rs);
