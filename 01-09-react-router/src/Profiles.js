import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to='/profiles/velopert'>velopert</Link>
                </li>
                <li>
                    <Link to='/profiles/homer'>homer</Link>
                </li>
            </ul>
            {/*
                render 속성에서 컴포넌트를 넣는 것이 아니라 바로 함수형 컴포넌트르 선언할 수 있다.
                원한다면 함수 인자로 { match, location } 등을 받아서 처리할 수 있다. 
            */}
            <Route
                path='/profiles'
                exact
                render={({ match, location }) => <div>사용자를 선택해 주세요.</div>}
            />
            {/* 
                😁 Render를 사용하는 이유
                render를 사용하면 Profiles 컴포넌트에 어떠한 값 (변수)가 선언돼 있을 때 바로 참조할 수 있다는 이점이 있음.
            */}
            <Route path='/profiles/:username' component={Profile} />
        </div>
    );
}

export default Profiles;
