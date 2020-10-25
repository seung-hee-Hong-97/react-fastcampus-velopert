import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    /* 
        🤷‍♂️ 잠깐만! 위의 코드를 디스트럭처링하지 않는다면?
            다음과 같이 작성한다!
        const numberState = useState(0);
        const number = numberState[0];
        const setNumber = numberState[1];
     */
    const onIncrease = () => {
        // setNumber(number + 1);
        // 리액트 컴포넌트를 최적화하는 단계에서는 📢 업데이트 함수를 사용해야 함.
        setNumber((prevNumber) => prevNumber + 1); // 📢 업데이트 함수
    };
    const onDecrease = () => {
        setNumber(number - 1);
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
