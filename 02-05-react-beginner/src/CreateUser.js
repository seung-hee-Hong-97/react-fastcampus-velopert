import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
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
