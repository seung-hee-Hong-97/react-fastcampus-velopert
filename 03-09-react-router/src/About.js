import React from 'react';
import qs from 'qs';
function About({ location }) {
    // console.log(location); // qs를 이용하여 파싱 (location.search)

    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    console.log(query);
    const detail = query.detail === 'true'; //문자열로 비교해줘야 한다.
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습하는 예제 프로젝트.</p>
            {detail && <p>detail값이 true이다.</p>}
        </div>
    );
}

export default About;
