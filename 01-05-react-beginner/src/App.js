import React, { useRef } from 'react';
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
            username: 'sannim',
            email: 'inegg.apps@gmail.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@gmail.com',
        },
    ];
    const nextId = useRef(4); // 새로운 항목을 추가할 때는 id가 4인 것부터 시작

    const onCreate = () => {
        /*
          🤷‍♂️ useRef: useState로 굳이 관리할 필요가  없는 요소
          즉, 해당 값이 바뀌더라도 렌더링이 될 필요가 없는 요소는 useState보다는 useRef로 관리하는 것이 좋다
        */
        console.log(nextId.current); // 4
        nextId.current += 1;
    };
    return <UserList users={users} />;
}

export default App;
