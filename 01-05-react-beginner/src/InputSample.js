import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;
    const [text, setText] = useState('');
    const onChange = ({ target: { name, value } }) => {
        // 이벤트 객체를 매개변수로 받음
        const nextInputs = {
            ...inputs,
            [name]: value,
        };
        setInputs(nextInputs);
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            <div>
                {/*
                 🤷‍♂️ 여기서 value속성을 지정해야 상탯값이 동기화됨.
                    따라서 상탯값을 동기화해야 초기화버튼을 눌러서 text를 ('') 빈 문자로 만들었을 때 입력 창도 같이 비워지게 된다.
                 */}
                <input
                    name='name'
                    placeholder='이름'
                    onChange={onChange}
                    value={name}
                    ref={nameInput}
                />
                <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname} />
                <button onClick={onReset}>초기화</button>
            </div>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
