import React, { useEffect } from 'react';

function User({ user, onRemove }) {
    const { username, email, id } = user;

    useEffect(() => {
        console.log(username, '컴포넌트가 화면에 나타났음');
        /*
            props => state
            REST API
            D3 Video.js
            setInterval, setTimout
        */
        return () => {
            //  clearInterval, clearTimeout
            //  라이브러리 인스턴스 제거 작업 등을 수행
            console.log(username, '컴포넌트가 화면에서 사라진다');
        };
    }, []);

    return (
        <div>
            <b>{username}</b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;
