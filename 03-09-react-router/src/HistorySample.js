import React, { useEffect } from 'react';

function HistorySample({ history }) {
    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push('/');
    };

    const replaceToHome = () => {
        history.replace('/');
    };

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실 건가요?');
        return () => {
            unblock(); // 컴포넌트 언마운트될 떄 이탈 방지
        };
    }, []);

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈</button>
            <button onClick={replaceToHome}>안 남기고 홈</button>
        </div>
    );
}

export default HistorySample;
