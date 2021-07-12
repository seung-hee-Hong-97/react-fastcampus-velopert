import React from 'react';

function User({ user: { id, username, email }, onRemove }) {
    return (
        <div>
            <b>{username}</b>
            <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;
