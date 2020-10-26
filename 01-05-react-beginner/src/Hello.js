import React from 'react';

function Hello({ color, name, isSpecial }) {
    // props로 작성해도 되지만 구조분해를 해도 된다.
    console.log('🌍', name);
    return (
        <div
            style={{
                color,
            }}
        >
            {isSpecial ? <b>*</b> : null} {/*falsy한 값은 렌더링되지 않으나 0은 예외이다.*/}
            {isSpecial ? <b>*</b> : <i>(낫스페셜)</i>}
            {isSpecial && <b>*</b>}
            안녕하세요? {name}
        </div>
    ); // JSX
}

Hello.defaultProps = {
    name: '이름없음',
    color: 'blue',
};

export default Hello;
