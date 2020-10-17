/* 배열 내장함수 */
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

//기본적인 반복문 사용
for (let i = 0; i < superheroes.length; i++) {
    console.log(superheroes[i]);
}

//배열 내장함수 사용한 예제
superheroes.forEach((hero) => {
    console.log(hero);
});
