import produce from 'immer';

// 예제코드 1
const state = {
    number: 1,
    dontChangeMe: 2,
};

const nextState = produce(state, (draft) => {
    draft.number += 1;
});

console.log(nextState);

// 예제코드 2
const array = [
    { id: 1, text: 'hello' },
    { id: 2, text: 'bye' },
    { id: 3, text: 'lalala' },
];

const nextArray = produce(array, (draft) => {
    draft.push({
        id: 4,
        text: 'hahaha',
    });
});

console.log(nextArray);
