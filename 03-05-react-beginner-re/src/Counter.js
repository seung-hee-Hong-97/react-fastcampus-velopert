import React, { useReducer, useState } from 'react';

/* 
    - Reducer는 상태를 업데이트하는 함수라고 생각하자.
    - action은 상태를 어떻게 업데이트할 것인지를 전달해 주는 메시지 (type)와 재료(payload)로 구성된 것
    - state는 기존에 가지고 있던 상태
 */

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Action type이 유효하지 않습니다.');
    }
}

///////////////////🗨 나중에 상태 업데이트 로직은 별도의 파일로 분리할 수 있다. (관심사의 분리?)
const initialState = 0;

function Counter() {
    const [number, dispatch] = useReducer(reducer, initialState);

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}

export default Counter;
