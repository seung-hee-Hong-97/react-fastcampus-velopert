/* 인터페이스를 이용하여 객체의 타입을 지정하기 */
// interface Person {
//     name: string;
//     age?: number; // age가 있을 수도 있고 없을 수도 있다는 뜻
// }
type Person = {
    name: string;
    age?: number; // age가 있을 수도 있고 없을 수도 있다는 뜻
};

// interface Developer extends Person {
//     // name: string;
//     // age?: number;
//     skills: string[];
// }
type Developer = Person & {
    // name: string;
    // age?: number;
    skills: string[];
};

const person: Person = {
    name: '김유정',
    age: 20,
    // skills: ['javascript'], 이런 유형은 Person 인터페이스에 구현되어 있지 않다.
};

const expert: Developer = {
    name: '김개발',
    age: 22,
    skills: ['javascript', 'react', 'typescript'],
};

/*
    🤷‍♂️
    type alias는 인터페이스로 못하는 것을 할 수 있음.
    대부분의 경우에는 type alias를 사용하여도 문제되지 않음.
    그러나 라이브러리를 위한 타입을 설정하려면 인터페이스 사용을 권장.
    어떠한 경우에도 일관성 있게 사용하는 것이 중요하다.
    https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
*/

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'orange';
