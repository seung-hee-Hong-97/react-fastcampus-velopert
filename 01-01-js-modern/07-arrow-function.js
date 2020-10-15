const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => a - b; // 한 줄로 축약이 가능하다
console.log(sub(2, 2));

const sum = add(1, 2);
console.log(sum); // 3

const hello = (name) => {
    console.log(`Hello, ${name}!`);
};

hello('velopert');
