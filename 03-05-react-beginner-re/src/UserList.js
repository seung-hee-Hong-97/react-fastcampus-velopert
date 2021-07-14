import React, { useEffect } from 'react';

function User({ user: { id, username, email, active }, onRemove, onToggle }) {
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타났다.');
    //     //props => state
    //     // rest api
    //     // d3 video.js
    //     // setInterval, setTimeout
    //     return () => {
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거하기
    //         console.log('컴포넌트가 화면에서 사라졌다.');
    //     };
    // }, []);

    useEffect(() => {
        console.log({ id, username, email, active });
        return () => {
            console.log(id, '의 사용자의 값이 바뀌기 전', active);
        };
        // dependencies를 생략하면 변화의 유무와 관계없이 리렌더링될 때마다 계속 출력된다.
    }, [id, username, email, active]);

    return (
        <div>
            <b
                onClick={() => onToggle(id)}
                style={{ color: active ? 'green' : 'black', cursor: 'pointer' }}
            >
                {username}
            </b>
            <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default UserList;
