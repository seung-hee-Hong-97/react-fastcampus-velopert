import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
        </div>
    );
}

function UserList({ users }) {
    return (
        <div>
            {users.map((user) => (
                <User
                    user={user}
                    // 키 깜빡하지 말자
                    key={user.id}
                />
            ))}
        </div>
    );
}

export default UserList;
