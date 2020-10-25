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
                <Hello />
            </Wrapper>
        </div>
    );
}

export default App;
