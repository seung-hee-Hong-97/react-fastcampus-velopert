import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

function App() {
    return (
        <div>
            {/* 
                  🤷‍♂️ 유념할 사항
                  a 태그를 직접  사용해도 오류가 나지는 않는다. (당연하지...)
                  다만, 서버에 /about이라는 페이지를 요청하는 결과가 나므로 이러면 SPA를 쓰는 의미가 없어보일 수 있다는 것이지.
            */}
            <a href='/about'>a 태그를 사용할 수 있기는 하지요</a>
            {/* 
                    새로운 요청을 하지 않고 React Router를 라우터답게 사용하려면 Link컴포넌트를 이용한다. 
            */}
            <ul>
                <li>
                    <Link to='/'>홈</Link>
                </li>
                <li>
                    <Link to='/about'>소개</Link>
                </li>
                <li>
                    <Link to='/profiles/velopert'>사용자 정보</Link>
                </li>
            </ul>
            {/* 
              🤷‍♂️ 주의사항
                  BrowserRouter 기준으로 /도 일치하고 /about도 일치할 수 있다.
                  따라서 /에는 exact라는 속성을 true로 설정해서 완전히 일치할 경우에만 보이도록 설정한다. 
            */}
            <hr />
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/profiles/:username' component={Profile} />
        </div>
    );
}

export default App;
