import React, { useRef, useReducer, useMemo, useCallback } from 'react';
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
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                inputs: initialState.inputs,
                users: state.users.concat(action.user),
            };
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                ),
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id),
            };
        default:
            throw new Error('Unhandled action');
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [form, onChange, reset] = useInputs({
        username: '',
        email: '',
    });
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
    }, [username, email, reset]);

    const onToggle = useCallback((id) => {
        dispatch({
            type: 'TOGGLE_USER',
            id,
        });
    }, []);

    const onRemove = useCallback((id) => {
        dispatch({
            type: 'REMOVE_USER',
            id,
        });
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성 사용자 수: {count}</div>
        </>
    );
}

export default App;
