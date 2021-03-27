import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import User from './User';

async function getUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

function Users() {
    const [userId, setUserId] = useState(null);
    const { data: users, error, isLoading, reload, run } = useAsync({
        // promiseFn: getUsers,
        deferFn: getUsers,
    });

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>오류가 발생했습니다. {JSON.stringify(error)}</div>;
    if (!users) return <button onClick={run}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <button onClick={() => setUserId(user.id)}>자세히 ({user.id})</button>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={reload}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}

export default Users;
