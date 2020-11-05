import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
    console.log('리렌더링 테스트용 콘솔 🎨');
    return (
        <div>
            <input name='username' placeholder='계정명' onChange={onChange} value={username} />
            <input name='email' placeholder='이메일' onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

/* 🤷‍♂️ React.memo로 감싸면 Props가 바뀌었을 때에만 다시 렌더링한다. */
export default React.memo(CreateUser);
