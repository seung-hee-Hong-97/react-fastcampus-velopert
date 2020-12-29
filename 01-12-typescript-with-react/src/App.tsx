import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';

function App() {
    const onClick = (name: string) => {
        console.log(name);
    };
    return <Greetings name='리액트' optional='ㅎㅎ' onClick={onClick} />;
}

export default App;
