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

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

function App() {
    return (
        <ThemeProvider theme={{ palette }}>
            <AppBlock>
                <ButtonGroup>
                    <StyleButton size='large'>버튼</StyleButton>
                    <StyleButton color='gray'>버튼</StyleButton>
                    <StyleButton color='pink' size='small'>
                        버튼
                    </StyleButton>
                </ButtonGroup>
            </AppBlock>
        </ThemeProvider>
    );
}

export default App;
