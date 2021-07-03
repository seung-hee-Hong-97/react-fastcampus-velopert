import React from 'react';
import Profile from './Profile';
// import WithRouterSample from './WithRouterSample';
import { Link, Route } from 'react-router-dom';

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <Link to='/profiles/hong'>hong</Link>
                </li>
                <li>
                    <Link to='/profiles/homer'>Homer</Link>
                </li>
            </ul>
            <hr />
            <Route
                Path='/profiles'
                exact
                render={() => (
                    <div>
                        사용자 선택해주세용
                        <hr />
                    </div>
                )}
            />
            {/* path를 Path로 쓰면 어떻게 해... ㅠㅠㅠㅠ */}
            <Route path='/profiles/:username' component={Profile} />

            {/* <WithRouterSample /> */}
        </div>
    );
}

export default Profiles;
