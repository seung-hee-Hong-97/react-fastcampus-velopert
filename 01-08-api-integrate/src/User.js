import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';

async function getUser({ id }) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

function User({ id }) {
    const { data: user, error, isLoading } = useAsync({
        promiseFn: getUser,
        /* 컴포넌트가 처음 렌더링될 때 id를 넣어 호출한다. */
        id,
        /* id값이 바뀔 때마다 재차 호출한다.*/
        watch: id,
    });

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>오류가 발생했습니다. {error}</div>;
    if (!user) return null;
    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <strong>Email: {user.email}</strong>
            </p>
        </div>
    );
}
export default User;
