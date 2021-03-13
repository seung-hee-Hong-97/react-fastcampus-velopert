import React, { useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';
import useInputs from './useInputs';

function countActiveUsers(users) {
    console.log('활성 사용자를 세는 중');
    return users.filter((user) => user.active).length;
}

const initialState = {
    users: [
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
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user),
            };
        case 'TOGGLE_USER':
            return {
                inputs: { ...state.inputs },
                users: state.users.map((user) =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                ),
            };
        case 'REMOVE_USER':
            return {
                inputs: { ...state.inputs },
                users: state.users.filter((user) => user.id !== action.id),
            };
        default:
            throw new Error('Unhandled action');
    }
}

export const UserDispatch = createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [form, onChange, reset] = useInputs({ username: '', email: '' });
    const { username, email } = form;
    const nextId = useRef(4);
    const { users } = state;

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            },
        });
        nextId.current += 1;
        reset();
    }, [username, email, reset /* (eslint) */]);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} />
            <div>활성 사용자 수: {count}</div>
        </UserDispatch.Provider>
    );
}

export default App;
