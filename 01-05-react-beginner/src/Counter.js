import React, { useReducer } from 'react';

function reducer(state, action) {
    /*
        state: 여기서 state는 숫자 형식으로서 사용할 것이다.
        action: INCREMENT, DECREMENT만 사용
    */
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        //위의 case 이외의 type이 들어오면 오류를 발생시킨다.
        default:
            throw new Error('Unhandled action');
        // 또는 return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT',
        });
    };
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT',
        });
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
