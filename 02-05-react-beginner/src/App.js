import React, { useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import produce from 'immer';
import './App.css';
import CreateUser from './CreateUser';
import UserList from './UserList';

// window.produce = produce; // 개발자 도구에서 사용하기

/*
    🧙‍♂️ 사용 예제
    const array = [{id: 1, text: 'hello'}, {id: 2, text:'bye'},{id:3, text:'lalabla'}];
    const nextArray = produce(array, draft => {
        draft.push({id: 4, text: 'blabla'});
        draft[0].text = draft[0].text + ' world';
    });
*/

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
            return produce(state, (draft) => {
                draft.users.push(action.user);
            });
        // return {
        //     users: state.users.concat(action.user),
        // };
        case 'TOGGLE_USER':
            return produce(state, (draft) => {
                const user = draft.users.find((user) => user.id === action.id);
                user.active = !user.active;
            });
        // return {
        //     inputs: { ...state.inputs },
        //     users: state.users.map((user) =>
        //         user.id === action.id ? { ...user, active: !user.active } : user
        //     ),
        // };
        case 'REMOVE_USER':
            return produce(state, (draft) => {
                const index = draft.users.findIndex((user) => user.id === action.id);
                draft.users.splice(index, 1);
            });
        // return {
        //     inputs: { ...state.inputs },
        //     users: state.users.filter((user) => user.id !== action.id),
        // };
        default:
            throw new Error('Unhandled action');
    }
}

export const UserDispatch = createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users} />
            <div>활성 사용자 수: {count}</div>
        </UserDispatch.Provider>
    );
}

export default App;
