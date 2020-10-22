// 📕 함수의 기본 파라미터

const calculateCircleArea = (r = 10) => {
    return Math.PI * r * r;
};

const area = calculateCircleArea(4);
console.log(area);
console.log(calculateCircleArea(null)); // 기본 파라미터 미지정 시 NaN => 지정 시 계산되어 나옴.
