import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

function Child() {
    const text = useContext(MyContext); // context에 있는 값을 읽어와서 사용할 수 있게 해주는 리액트 내장 훅이다.
    return <div>안녕하세요 {text}</div>;
}

function Parent({ text }) {
    return <Child text={text} />;
}

function GrandParent({ text }) {
    return <Parent text={text} />;
}

function ContextSample2() {
    const [value, setValue] = useState(true);
    return (
        // MyContext라는 컴포넌트 안에 Provider라는 컴포넌트가 또 있다.
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent text='GOOD' />
            <button onClick={() => setValue(!value)}>CLICK ME!</button>
        </MyContext.Provider>
    );

    // /*#__PURE__*/
    // // MyContext라는 컴포넌트 안에 Provider라는 컴포넌트가 또 있다.
    // React.createElement(MyContext.Provider, {
    //     value: "GOOD"
    //   }, /*#__PURE__*/React.createElement(GrandParent, {
    //     text: "GOOD"
    //   }));
}

export default ContextSample2;
