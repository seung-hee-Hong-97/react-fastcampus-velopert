import React, { useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import produce from 'immer';
import CreateUser from './CreateUser';
import UserList from './UserList';
import useInputs from './useInputs';

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
/*
🤷‍♂️ immer를 사용한 경우 (불변성을 유지)
    - 필수적으로 사용해야 하는 라이브러리는 아님
    - 불변성을 유지하되 구현하기 까다롭거나 코드의 가독성이 떨어진다면 이 라이브러리를 동원하여 코드를 작성.
    - TODO: 이 라이브러리는 나중에 다시 배우자.
    - 사용한다고 하더라도 꼭 필요한 경우에만 사용하는 편이 낫다. 
*/
function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return produce(state, (draft) => {
                draft.users.push(action.user);
            });
        // return {
        //     ...state,
        //     inputs: initialState.inputs,
        //     users: state.users.concat(action.user),
        // };
        case 'TOGGLE_USER':
            return produce(state, (draft) => {
                const user = draft.users.find((user) => user.id === action.id);
                user.active = !user.active;
            });
        // return {
        //     ...state,
        //     users: state.users.map((user) =>
        //         user.id === action.id ? { ...user, active: !user.active } : user
        //     ),
        // };
        case 'REMOVE_USER':
            return produce(state, (draft) => {
                draft.users.filter((user) => user.id !== action.id);
            });
        // return {
        //     ...state,
        //     users: state.users.filter((user) => user.id !== action.id),
        // };
        default:
            throw new Error('Unhandled action');
    }
}

export const UserDispatch = createContext(null);

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
        reset(initialState);
    }, [username, email, reset]);

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
