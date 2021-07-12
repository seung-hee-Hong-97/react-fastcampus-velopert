import { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'gildong',
            email: 'gildong@hong.com',
        },
        {
            id: 2,
            username: 'homer',
            email: 'homer@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
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

    return (
        <>
            <CreateUser username={username} email={email} onCreate={onCreate} onChange={onChange} />
            <UserList users={users} onRemove={onRemove} />
        </>
    );
}

export default App;
