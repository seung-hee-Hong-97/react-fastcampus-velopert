import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

function Child() {
    const text = useContext(MyContext);
    return <div>안녕하세요? {text}</div>;
}

function Parent({ text }) {
    return <Child text={text} />;
}

function GrandParent({ text }) {
    return <Parent text={text} />;
}

function ContextSample() {
    const [value, setValue] = useState(true);
    return (
        <MyContext.Provider value={value ? 'G😍😍D' : 'BAD🤔'}>
            <GrandParent text='이제 props로 전달하지 않고도 GOOD을 조회할 수 있다.' />
            <button onClick={() => setValue(!value)}>CLICK ME</button>
        </MyContext.Provider>
    );
}

export default ContextSample;
