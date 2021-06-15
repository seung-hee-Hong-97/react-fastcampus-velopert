import React, { useCallback, useMemo, useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
    console.log('활성 사용자를 세는 중..');
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

    // 리렌더링되지 않는 값으로 관리할 수도 있음.
    const nextId = useRef(4);

    // 컴포넌트가 리렌더링될 때마다 새로운 함수를 만들고 있었다.
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        setUsers((users) => [...users, user]);
        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback((id) => {
        setUsers((users) => users.filter((user) => user.id !== id));
    }, []);

    const onToggle = useCallback((id) => {
        setUsers((users) =>
            users.map((user) =>
                user.id === id
                    ? {
                          ...user,
                          active: !user.active,
                      }
                    : user
            )
        );
    }, []);

    // 특정 값이 바뀔 때만 특정 함수를 실행하여 연산 / 원하는 값이 바뀌지 않았다면 값을 재사용
    // ex) input상자에 텍스트를 입력할 때마다 리렌더링이되는데 이때는 활성 사용자 수의 상태가 변하지 않으므로 함수를 재실행하지않고 값을 재사용한다.
    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수: {count}</div>
        </>
    );
}

export default App;
