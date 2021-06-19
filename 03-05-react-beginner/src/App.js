import React, { useReducer, createContext } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return {
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

// 여러 컴포넌트를 통해 특정 값을 전달할 필요 없이 Context만을 이용하면 굉장히 깔끔한 구조로 사용할 수 있다.
export const UserDispatch = createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users} />
            <div>활성 사용자 수: {users.filter((user) => user.active).length}</div>
        </UserDispatch.Provider>
    );
}

export default App;
