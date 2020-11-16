import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import StyleButton from './components/StyleButton';

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const palette = {
    blue: '#228be6',
    gray: '#496057',
    pink: '#f06595',
};

function App() {
    return (
        <ThemeProvider theme={{ palette }}>
            <AppBlock>
                <StyleButton>버튼</StyleButton>
                <StyleButton color='gray'>버튼</StyleButton>
                <StyleButton color='pink'>버튼</StyleButton>
            </AppBlock>
        </ThemeProvider>
    );
}

export default App;
