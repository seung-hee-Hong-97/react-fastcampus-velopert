import React, { useState, useRef } from 'react';

function InputSample() {
    // 나중에 이를 이용하여 커스텀 훅을 만들어 주는 것이 중요하겠지!
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
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
            <input
                name='name'
                placeholder='이름'
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;
