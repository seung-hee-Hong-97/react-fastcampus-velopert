import React, { useReducer } from 'react';

// 👇 봐봐 절대 Counter 컴포넌트 안에 있지 않아.
// 그 말은 다른 파일로도 분리시킬 수 있다는 거야!
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled Action');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' });
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
