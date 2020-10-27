import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (event) => {
        // 이벤트 객체를 매개변수로 받음
        console.log(event.target); //event.target는 DOM에 관한 정보르 ㄹ가지고 있음.
        setText(event.target.value); // useState를 이용하여 상탯값 관리
    };
    const onReset = () => {
        setText('');
    };
    return (
        <div>
            <div>
                {/*
                 🤷‍♂️ 여기서 value속성을 지정해야 상탯값이 동기화됨.
                    따라서 상탯값을 동기화해야 초기화버튼을 눌러서 text를 ('') 빈 문자로 만들었을 때 입력 창도 같이 비워지게 된다.
                 */}
                <input onChange={onChange} value={text} />
                <button onClick={onReset}>초기화</button>
            </div>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;
