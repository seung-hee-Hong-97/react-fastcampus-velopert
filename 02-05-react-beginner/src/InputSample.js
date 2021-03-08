import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;
    const onChange = (event) => {
        const { name, value } = event.target;
        // 🧙‍♂️ 객체 상태를 업데이트할 때는 반드시 새로운 객체를 만들어야 한다.
        // 이를 불변성을 지켜줘야만 컴포넌트 업데이트 최적화를 할 수 있다.
        setInputs({ ...inputs, [name]: value });
    };
    const onReset = () => {
        setInputs({ name: '', nickname: '' });
        nameInput.current.focus();
    };
    return (
        <div>
            <input
                type='text'
                ref={nameInput}
                placeholder='이름'
                name='name'
                onChange={onChange}
                value={name}
            />
            <input
                type='text'
                placeholder='닉네임'
                name='nickname'
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {`${name}(${nickname})`}</b>
            </div>
        </div>
    );
}

export default InputSample;
