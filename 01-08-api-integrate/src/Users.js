import React, { useState } from 'react';
import User from './User.js';
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext.js';

function Users() {
    /*
        🤷‍♂️ useAsync라는 커스텀 훅을 만들었기 때문에 컴포넌트의 코드는 깔끔해졌다.
    */
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const { loading, data: users, error } = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    };

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류가 발생했습니다. {error}</div>;
    if (!users) return <button onClick={fetchData}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => setUserId(user.id)}>
                        {user.name}
                    </li>
                ))}
            </ul>
            <button onClick={fetchData}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}
export default Users;
