import React from 'react';

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
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
}

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

export default UserList;
