import React from 'react';
import qs from 'qs';

function About({ location }) {
    /* 🤷‍♂️ /about?a=1을 요청한 경우 */
    console.log(location); //{pathname: "/about", search: "?a=1", hash: "", state: undefined}
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, // 맨 앞에 있는 ❔ 기호 제외하기
    });
    console.log(query); //{a: "1"}
    const detail = query.detail === 'true'; // 다만, 문자열 값으로 가져오므로 문자열 값으로 === 비교 연산을 해야 한다.

    //숫자를 받아와 연산할 때는 parseInt 등 숫자로 변환작업을 수행한 뒤에 연산하기.

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습하는 예제 프로젝트입니다. </p>
            {detail && <p>detail 값이 true입니다.</p>}
        </div>
    );
}

export default About;
