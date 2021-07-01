import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>홈</Link>
                </li>
                <li>
                    <Link to='/about?a=1'>소개</Link>
                </li>
                <li>
                    {/* <Link to='/profile/homer'>심슨 아저씨</Link> */}
                    <Link to='/profiles'>프로필 목록</Link>
                </li>
            </ul>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            {/* <Route path='/profile/:username' component={Profile} /> */}
            <Route path='/profiles' component={Profiles} />
        </div>
    );
}

export default App;
