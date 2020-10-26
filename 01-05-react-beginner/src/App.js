import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
    return (
        <div className='App'>
            <Wrapper>
                {/* 주석 */}
                <Hello
                    // 주석
                    name='react'
                    color='red'
                    isSpecial={true}
                />
                <Hello
                    isSpecial
                    // 값을 지정하지 않으면 자동으로 true값으로 인식
                />
                <Hello />
            </Wrapper>
        </div>
    );
}

export default App;
