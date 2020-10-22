// 📕 Function Parameter 에서 Rest 사용하기
// function sum(a, b, c, d, e, f, g) {
//     let result = 0;
//     if (a) result += a;
//     if (b) result += b;
//     if (c) result += c;
//     if (d) result += d;
//     if (e) result += e;
//     if (f) result += f;
//     if (g) result += g;
//     return result;
// }

function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

// 📕 Function 인자에서 Rest 사용하기

function subtract(x, y) {
    return x - y;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const result = subtract(1, 2);
console.log(sum(...numbers));
console.log(result);
