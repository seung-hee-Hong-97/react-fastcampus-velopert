import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;

    // useEffect(() => {
    //     console.log('user값이 설정됨');
    //     console.log(user);
    //     return () => {
    //         console.log('user값이 바뀌기 전');
    //         console.log(user);
    //     };
    // }, [user]);

    return (
        <div>
            <b
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer',
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

// 두 번째 파라미터는 true일 경우 리렌더링하지 않고 false일 경우 리렌더링을 실행함.
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);
