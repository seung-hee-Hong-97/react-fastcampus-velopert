import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <p>리액트 프로젝트 만들기</p>
                <Hello name='react' color='red' isSpecial={true} />
                <Hello color='pink' />
                <Wrapper>뤠퍼</Wrapper>I ❤ React
                <div className='gray-box'></div>
            </header>
        </div>
    );
}

export default App;
