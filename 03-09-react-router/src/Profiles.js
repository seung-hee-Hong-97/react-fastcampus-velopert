import React from 'react';
import Profile from './Profile';
// import WithRouterSample from './WithRouterSample';
import { NavLink, Route } from 'react-router-dom';
import RouterHookSample from './RouterHookSample';

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink
                        activeStyle={{ background: 'black', color: 'white' }}
                        to='/profiles/hong'
                        // isActive={(match, location) => {
                        // }}
                    >
                        hong
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeStyle={{ background: 'black', color: 'white' }}
                        to='/profiles/homer'
                    >
                        Homer
                    </NavLink>
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
            <RouterHookSample />
        </div>
    );
}

export default Profiles;
