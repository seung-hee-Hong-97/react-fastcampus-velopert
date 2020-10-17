function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

// 3보다 큰 숫자만 배열로 담아 반환하기 (아직 배열 내장함수 X)

function biggerThanThree(numbers) {
    const result = [];
    for (let n of numbers) {
        if (n > 3) {
            result.push(n);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));
