//퀴즈

//함수에 n개의 숫자들이 파라미터로 주어지면 그중 가장 큰 값 구하기

function max(...args) {
    return args.sort((a, b) => b - a)[0];
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result); // 10
