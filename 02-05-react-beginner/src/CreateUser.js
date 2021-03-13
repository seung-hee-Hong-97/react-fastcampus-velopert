import React, { useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './useInputs';

function CreateUser() {
    const [form, onChange, reset] = useInputs({ username: '', email: '' });
    const { username, email } = form;
    const nextId = useRef(4);

    const dispatch = useContext(UserDispatch);

    const onCreate = () => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
                active: false,
            },
        });
        nextId.current += 1;
        reset();
    };

    return (
        <div>
            <input
                name='username'
                placeholder='계정명'
                onChange={onChange}
                value={username}
                type='text'
            />
            <input
                name='email'
                placeholder='이메일'
                onChange={onChange}
                value={email}
                type='text'
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

// props가 바뀌었을 때만 리렌더링한다.
export default React.memo(CreateUser);
