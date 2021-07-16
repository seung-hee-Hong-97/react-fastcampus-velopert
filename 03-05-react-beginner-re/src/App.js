import React, { useRef, useState, useMemo } from 'react';
import CreateUser from './CreateUser';
import InputSample from './InputSample';
import UserList from './UserList';

function countActiveUsers(users) {
    console.log('활성 사용자 세는 중...');
    return users.filter((user) => user.active).length;
}

function App() {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'gildong',
            email: 'gildong@hong.com',
            active: true,
        },
        {
            id: 2,
            username: 'homer',
            email: 'homer@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ]);

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;
    const nextId = useRef(4);

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onCreate = () => {
        setInputs({
            username: '',
            email: '',
        });

        setUsers([...users, { id: nextId.current, username, email }]);
        nextId.current += 1; // 값이 바뀌더라도 리렌더링되지 않는다.
    };

    const onRemove = (id) => {
        setUsers((users) => users.filter((user) => user.id !== id));
    };

    const onToggle = (id) => {
        setUsers((users) =>
            users.map((user) => (user.id === id ? { ...user, active: !user.active } : user))
        );
    };

    const count = useMemo(() => countActiveUsers(users), users);
    // users가 바뀔 때에만 함수를 호출하고 그 이전까지는 호출된 함수의 결괏값을 재사용한다.

    return (
        <>
            <CreateUser username={username} email={email} onCreate={onCreate} onChange={onChange} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수: {count}</div>
        </>
    );
}

export default App;
