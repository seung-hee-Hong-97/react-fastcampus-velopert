import React, { useState } from 'react';
import axios from 'axios';
import useAsync from './useAsync.js';
import User from './User.js';

async function getUsers() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}

function Users() {
    /*
        🤷‍♂️ useAsync라는 커스텀 훅을 만들었기 때문에 컴포넌트의 코드는 깔끔해졌다.
    */
    const [state, refetch] = useAsync(getUsers, [], true);
    const [userId, setUserId] = useState(null);

    const { loading, data: users, error } = state;
    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류가 발생했습니다. {error}</div>;
    if (!users) return <button onClick={refetch}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => setUserId(user.id)}>
                        {user.name}
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}
export default Users;
