import React, { useRef, useState, useMemo, useCallback } from 'react';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
    console.log('활성 사용자를 세는 중');
    return users.filter((user) => user.active).length;
}

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;
    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ]);

    /*
        🤷‍♂️
        여기서는 특정 DOM을 선택하기 위해 useRef를 활용한 것이 아니라
        특정 값이 바뀌어도 렌더링될 필요가 없는 값을 관리하기 위해 사용한 것이다.
    */
    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        const user = { id: nextId.current, username, email };
        setUsers((users) => [...users, user]);
        setInputs({
            username: '',
            email: '',
            active: false,
        });
        nextId.current += 1;
    }, [email, username]);

    const onRemove = useCallback((id) => {
        setUsers((users) => users.filter((user) => user.id !== id));
    }, []);

    const onToggle = useCallback((id) => {
        setUsers((users) =>
            users.map((user) => (user.id === id ? { ...user, active: !user.active } : user))
        );
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <div className='App'>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수: {count}</div>
        </div>
    );
}

export default App;
