import React, { useCallback, useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './useInputs';

function CreateUser() {
    const dispatch = useContext(UserDispatch);

    const [form, onChange, reset] = useInputs({ username: '', email: '' });
    const { username, email } = form;
    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            },
        });
        nextId.current += 1;
        reset();
    }, [username, email, reset, dispatch]);

    return (
        <div>
            <input name='username' placeholder='계정명' onChange={onChange} value={username} />
            <input name='email' placeholder='이메일' onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);
