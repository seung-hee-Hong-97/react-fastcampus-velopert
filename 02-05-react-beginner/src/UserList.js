import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch);

    const onToggle = (id) => {
        dispatch({
            type: 'TOGGLE_USER',
            id,
        });
    };

    const onRemove = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            id,
        });
    };

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

function UserList({ users }) {
    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
}

// 두 번째 파라미터는 true일 경우 리렌더링하지 않고 false일 경우 리렌더링을 실행함.
export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);
