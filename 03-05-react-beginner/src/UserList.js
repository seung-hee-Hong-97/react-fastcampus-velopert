import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(({ user }) => {
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
                    color: active ? 'red' : 'black',
                    cursor: 'pointer',
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>{email}</span>
            <button onClick={() => onRemove(id)}>❌</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User
                    user={user}
                    // 키 깜빡하지 말자
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default React.memo(UserList);
