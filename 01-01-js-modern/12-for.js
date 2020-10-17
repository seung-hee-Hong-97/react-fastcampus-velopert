/*
시작 → 조건 ◎ 구문실행
            ↓
            끝
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('=====');

for (let i = 10; i > 0; i -= 2) {
    console.log(i);
}

console.log('for문과 배열 함께 사용하기');

const names = ['멍멍이', '야옹이', '몽뭉이'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log('====');
