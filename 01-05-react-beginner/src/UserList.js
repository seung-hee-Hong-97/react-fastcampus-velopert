import React, { useEffect } from 'react';

/* 새로운 컴포넌트 */
const User = React.memo(function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    useEffect(() => {
        console.log('📢 user 컴포넌트 렌더링됨', user);
        /*
            🤷‍♂️ useEffect의 활용
            - 이미 렌더링이 된 이후이므로 DOM에 바로 접근하여도 된다.
            props의 값을 state로 설정하기
            REST API 작업 처리
            D3, Video.js의 라이브러리를 처리하는 부분
        */
        return () => {
            /*
                🤷‍♂️ useEffect 활용2
                이 부분은 컴포넌트가 사라질 때 실행되는 구문
                clearInterval, clearTimeout, 라이브러리 인스턴스 제거 등의 구문 처리
            */
            console.log('📢 user 값이 바뀌기 전...', user); // 사라질 때는 return구문에 함수 작성
        };
    }, [user]); // [depths], 이 배열이 비어 있으면 컴포넌트 로드시 딱 한 번만 나타남
    return (
        <div>
            <b
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer',
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default React.memo(
    UserList,
    /* 🤷‍♂️
        이전 Props와 다음 Props의 특정 속성을 비교하여
        동일한 값이라면 리렌더링하지 않도록 다음과 같이 설정할 수도 있음.
    */
    (prevProps, nextProps) => nextProps.users === prevProps.users
);
