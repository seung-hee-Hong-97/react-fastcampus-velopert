import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (event) => {
        console.log(event.target); //이벤트가 발생한 곳의 정보(DOM)를 가지고 있음.
        console.log(event.target.value); // 값 조회하기
        setText(event.target.value);
    };

    const onReset = () => setText('');

    return (
        <div>
            <input type='text' onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;
