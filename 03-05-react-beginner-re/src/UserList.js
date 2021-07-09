import React from 'react';

const users = [
    {
        id: 1,
        username: 'gildong',
        email: 'gildong@hong.com',
    },
    {
        id: 2,
        username: 'homer',
        email: 'homer@example.com',
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
    },
];

function User({ user: { id, username, email } }) {
    return (
        <div>
            <b>{username}</b>
            <span>{email}</span>
        </div>
    );
}

function UserList() {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default UserList;
