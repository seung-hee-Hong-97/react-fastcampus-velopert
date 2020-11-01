import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

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

    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} />
        </>
    );
}

export default App;
