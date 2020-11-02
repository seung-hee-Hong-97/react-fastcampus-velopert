import React, { useRef, useState, useMemo } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
    /*🤷‍♂️
        문제점: 불필요한 시점에 함수가 호출되어 렌더링된다.
        CreateUser 컴포넌트에서 input이벤트가 발생될 때에도 지속적으로 호출되고 있음.
     */
    console.log('활성 사용자 수를 세는 중...');
    return users.filter((user) => user.active).length;
}

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'sannim',
            email: 'inegg.apps@gmail.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@gmail.com',
            active: false,
        },
    ]);
    const nextId = useRef(4); // 새로운 항목을 추가할 때는 id가 4인 것부터 시작

    const onChange = ({ target }) => {
        const { name, value } = target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onCreate = () => {
        /*
          🤷‍♂️ useRef: useState로 굳이 관리할 필요가  없는 요소
          즉, 해당 값이 바뀌더라도 렌더링이 될 필요가 없는 요소는 useState보다는 useRef로 관리하는 것이 좋다
        */
        const user = {
            id: nextId.current,
            username,
            email,
        };
        setUsers([...users, user]);
        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    };

    const onRemove = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const onToggle = (id) => {
        setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
    };

    /*
    🤷‍♂️ userMemo
    => [배열]에 든 값이 변화가 있을 때에만 지정한 함수가 호출되도록 설정
    */
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
