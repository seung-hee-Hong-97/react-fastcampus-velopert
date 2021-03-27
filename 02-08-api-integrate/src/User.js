import React from 'react';
import axios from 'axios';
// import useAsync from './useAsync';
import { useAsync } from 'react-async';

async function getUser({ id }) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

function User({ id }) {
    const { data: user, error, isLoading } = useAsync({
        promiseFn: getUser,
        id,
        /* id값을 바라보고 값이 변하면 다시 호출하게 된다. */
        watch: id,
    });

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>오류가 발생했습니다.</div>;
    if (!user) return <div>데이터 없음...</div>;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <strong>Email: </strong> {user.email}
            </p>
        </div>
    );
}
export default User;
