import React, { useRef, useState } from 'react';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const [users, setUsers] = useState([
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
    ]);

    /*
        🤷‍♂️
        여기서는 특정 DOM을 선택하기 위해 useRef를 활용한 것이 아니라
        특정 값이 바뀌어도 렌더링될 필요가 없는 값을 관리하기 위해 사용한 것이다.
    */
    const nextId = useRef(4);

    const onCreate = () => {
        const user = { id: nextId.current, username, email };
        setUsers([...users, user]);
        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    };

    return (
        <div className='App'>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} />
        </div>
    );
}

export default App;
