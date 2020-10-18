/* 배열 내장함수 */
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

//기본적인 반복문 사용
for (let i = 0; i < superheroes.length; i++) {
    console.log(superheroes[i]);
}

//배열 내장함수 사용한 예제
//forEach
superheroes.forEach((hero) => {
    console.log(hero);
});

//map
const array = [1, 2, 3, 4, 5, 6, 7, 8];
//기존 배열을 가지고 변환하여 새로운 배열 객체를 반환받고 싶을 때
const squared = array.map((n) => n * n);
console.log(squared);

const items = [
    {
        id: 1,
        text: 'hello',
    },
    {
        id: 2,
        text: 'bye',
    },
];
const texts = items.map((item) => item.text);
console.log(texts);

//superheroes에서 토르가 몇 번째인지?
const index = superheroes.indexOf('토르');
console.log('토르의 위치', index);

// 만약에 객체이거나 조건식을 써서 찾아야 하는 상황이라면? find 배열 객체 내장 메서드를 사용하면 유용하다.

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    },
];

const todosIndexIncorrect = todos.indexOf(3); // -1 일치하는 값이 없음. id프로퍼티만을 비교할 수가 없음
console.log(todosIndexIncorrect);

const todosIndex = todos.findIndex((todo) => todo.id === 3); // 해당하는 객체의 인덱스 값을 반환
console.log(todosIndex);

const todosFind = todos.find((todo) => todo.id === 3); //해당하는 객체 자체를 반환
console.log(todosFind);

// filter 내장함수
// 특정 조건을 만족하는 원소를 찾아서 새로운 배열로 구성한다.
const tasksNotDone = todos.filter(({ done }) => !done);
console.log('filter', tasksNotDone);
