import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: '이름없음',
    };
    render() {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요? {name}
            </div>
        );
    }
}

/*
    🤷‍♂️ useEffect, useState 등
    훅 메서드를 지원하지 않았던 시기에는 class형 컴포넌트를 사용했다.
    새로운 프로젝트를 만든다면 함수형 컴포넌트로 시작하는 것이 바람직.
*/

// function Hello({ color, name, isSpecial }) {
//     // props로 작성해도 되지만 구조분해를 해도 된다.
//     console.log('🌍', name);
//     return (
//         <div
//             style={{
//                 color,
//             }}
//         >
//             {isSpecial ? <b>*</b> : null} {/*falsy한 값은 렌더링되지 않으나 0은 예외이다.*/}
//             {isSpecial ? <b>*</b> : <i>(낫스페셜)</i>}
//             {isSpecial && <b>*</b>}
//             안녕하세요? {name}
//         </div>
//     ); // JSX
// }

Hello.defaultProps = {
    name: '이름없음',
    color: 'blue',
};

export default Hello;
