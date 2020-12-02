import React from 'react';
import useReactRouter from 'use-react-router';

function RouterHookSample() {
    /* 🤷‍♂️ 
        useReactRouter 사용하기
            use-react-router의 설치가 필요하다.
            이 컴포넌트를 JSX단에서 불러오기를 하면 자동으로 이 구문이 실행되는 것을 확인할 수 있다.
    */
    const { history, location, match } = useReactRouter();
    console.log({ history, location, match });
    return null;
}

export default RouterHookSample;
