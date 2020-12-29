import React, { useState } from 'react';

/*
    🤷‍♂️ 헐!!!
    Typescript를 사용하든 사용하지 않든 코드에는 차이가 거의 없다... 
    그냥  Typescript를 쓴다는 것 하나만으로 겁만 먹었던 거야??? 😱
*/

function Counter() {
    const [count, setCount] = useState<number>(0); // 제네릭을 선언하지 않아도 무방
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);

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
