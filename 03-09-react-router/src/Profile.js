import React from 'react';
import WithRouterSample from './WithRouterSample';

const profileData = {
    hong: {
        name: '홍길동',
        description: '홍길동전',
    },
    homer: {
        name: '호머 심슨',
        description: '심슨에 나오는 아빠 역할 캐릭터',
    },
};
// match는 라우터 컴포넌트에서 받아 온 속성
function Profile({ match }) {
    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>

            <WithRouterSample />
        </div>
    );
}

export default Profile;
