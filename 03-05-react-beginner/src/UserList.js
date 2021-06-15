import React, { useEffect } from 'react';

const User = React.memo(({ user, onRemove, onToggle }) => {
    const { username, email, id, active } = user;

    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     /*
    //         props => state
    //         REST API
    //         D3 Video.js
    //         setInterval, setTimeout
    //         여기서는 DOM에 바로 접근하는 것이 가능하다.
    // */
    //     return () => {
    //         /*
    //             clearInterval, clearTimeout
    //             라이브러리 인스턴스 제거
    //         */
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     };
    // }, []);

    useEffect(() => {
        // console.log('user 값이 설정됨');
        // console.log(user); // user의 객체가 새로 마운트되거나 혹은 기존의 객체에 변경이 일어날 때 호출됨
        return () => {
            // console.log('user 값이 바뀌기 전');
            // console.log(user);
        };
    }, [user]); // dependencies가 없으면 모든 컴포넌트에 대해 출력을 반환함

    return (
        <div>
            <b
                style={{
                    color: active ? 'red' : 'black',
                    cursor: 'pointer',
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>{email}</span>
            <button onClick={() => onRemove(id)}>❌</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User
                    user={user}
                    // 키 깜빡하지 말자
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default React.memo(UserList);
