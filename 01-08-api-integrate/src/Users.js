import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import User from './User.js';

async function getUsers() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}

function Users() {
    /*
        🤷‍♂️ useAsync라는 커스텀 훅을 만들었기 때문에 컴포넌트의 코드는 깔끔해졌다.
    */
    const [userId, setUserId] = useState(null);
    const { data: users, error, isLoading, reload, run } = useAsync({
        deferFn: getUsers,
    });

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>오류가 발생했습니다. {error}</div>;
    if (!users) return <button onClick={run}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => setUserId(user.id)}>
                        {user.name}
                    </li>
                ))}
            </ul>
            <button onClick={reload}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}
export default Users;
