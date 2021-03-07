import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>리액트 프로젝트 만들기</p>
                <Hello />
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    I ❤ React
                </a>
            </header>
        </div>
    );
}

export default App;