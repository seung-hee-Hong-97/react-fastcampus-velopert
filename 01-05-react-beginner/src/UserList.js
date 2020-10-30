import React from 'react';

/* 새로운 컴포넌트 */
function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    );
}

<<<<<<< Updated upstream
function UserList({ users }) {
=======
function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'sannim',
            email: 'inegg.apps@gmail.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@gmail.com',
        },
    ];
>>>>>>> Stashed changes
    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserList;
