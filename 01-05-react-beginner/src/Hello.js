import React from 'react';

function Hello({ color, name }) {
    // props로 작성해도 되지만 구조분해를 해도 된다.
    console.log('🌍', name);
    return (
        <div
            style={{
                color,
            }}
        >
            안녕하세요? {name}
        </div>
    ); // JSX
}

Hello.defaultProps = {
    name: '이름없음',
    color: 'blue',
};

export default Hello;
