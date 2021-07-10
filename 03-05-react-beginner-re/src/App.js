import { useRef } from 'react';
import InputSample from './InputSample';
import UserList from './UserList';

const users = [
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
];

function App() {
    const nextId = useRef(4);

    const onCreate = () => {
        console.log(nextId.current);
        nextId.current += 1; // 값이 바뀌더라도 리렌더링되지 않는다.
    };

    return (
        <div className='App'>
            <InputSample />
            <UserList users={users} />
        </div>
    );
}

export default App;
