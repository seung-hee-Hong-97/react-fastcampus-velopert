import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import WithRouterSample from './WithRouterSample';

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
                <li>
                    <Link to='/history'>예제</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/about' component={About} />
                {/* <Route path='/profile/:username' component={Profile} /> */}
                <Route path='/profiles' component={Profiles} />
                <Route path='/history' component={HistorySample} />
                {/* 매칭되는 path가 없을 때 모든 상황에 렌더링되는 컴포넌트를 보여줄 수 있다. ex) 404 페이지 */}
                <Route
                    render={({ location }) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다.</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
