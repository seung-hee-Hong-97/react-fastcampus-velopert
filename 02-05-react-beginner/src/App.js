import React, { useRef } from 'react';
import './App.css';
import UserList from './UserList';

function App() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
        },
    ];

    /*
        🤷‍♂️
        여기서는 특정 DOM을 선택하기 위해 useRef를 활용한 것이 아니라
        특정 값이 바뀌어도 렌더링될 필요가 없는 값을 관리하기 위해 사용한 것이다.
    */
    const nextId = useRef(4);

    const onCreate = () => {
        console.log(nextId.current);
        nextId.current += 1;
    };

    return (
        <div className='App'>
            <UserList users={users} />
        </div>
    );
}

export default App;
