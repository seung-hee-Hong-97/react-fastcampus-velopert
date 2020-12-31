import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action type');
    }
}

/* 
    🤷‍♂️ 헐!!!
    Typescript를 사용하든 사용하지 않든 코드에는 차이가 거의 없다... 
    그냥  Typescript를 쓴다는 것 하나만으로 겁만 먹었던 거야??? 😱
*/

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: 'INCREASE' });
    const onDecrease = () => dispatch({ type: 'DECREASE' });

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;
