//배열 안에 있는 모든 값을 사용하여 연산이 필요할 떄

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach((n) => {
    sum += n;
});
console.log(sum);

//reduce 사용하여 합이나 평균 구하기
const avg = numbers.reduce((accumulator, current, index, array) => {
    console.log(accumulator, current, index, array);
    if (index === array.length - 1) {
        // 평균 연산하기
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(avg);

//reduce 다른 예제

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {});

console.log(counts);
