import React from 'react';
import { withRouter } from 'react-router-dom';

function WithRouterSample({ location, match, history }) {
    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location, null, 2)} readOnly />
            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)} readOnly />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
}

export default withRouter(WithRouterSample);
/*
location: 

렌더링된 위치와 관계없이 진짜 위치를 가져옴
어디에서 불러오든 동일한 정보를 가리킨다.

{
  "pathname": "/profiles/homer",
  "search": "",
  "hash": "",
  "key": "0pch1d"
}


match: 현재 WithRouterSample 컴포넌트가 렌더링된 위치를 기준으로 가져온다.

App.js에서 렌더링
{
    "path": "/",
    "url": "/",
    "params": {},
    "isExact": false
}

그리고 Router컴포넌트에서는 Profiles 이하 homer와 같은 값을 가져오지 않고 있으므로 /Profiles까지만 뵝게 되낟. 
Profiles에서 렌더링
{
  "path": "/profiles",
  "url": "/profiles",
  "isExact": false,
  "params": {}
}


Profile에서 렌더링
{
  "path": "/profiles/:username", 
  "url": "/profiles/homer",
  "isExact": true,
  "params": {
    "username": "homer"
  }
}

*/
