# REST Api

## Methods

-   `GET`: 데이터 조회
-   `POST`: 데이터 등록
-   `PUT`: 데이터 수정
-   `DELETE`: 데이터 제거

## Axios 라이브러리

-   이 라이브러리를 이용하면 REST Api를 수월하게 이용할 수 있다.

```js
import axios from 'axios';
axios.get('/users/1');
axios.post('/users', {
    username: '/blabla',
    name: 'blah',
});
```

## 연습용 API

-   [링크](jsonplaceholder.typicode.com)

# Reducer 복습

## 기존 코드에서는 useState로 3개의 상태를 관리했다면?

    이번에는 `Reducer`라는 개념으로 상태를 관리한다.

## 이전에 useState로 관리했던 상탯값은 action으로!!!

    그리고 상태의 유형과 상태의 값은 모두 action에서 관리한다고 보면 된다.
    - 📌 reducer: 상태를 업데이트하는 함수
    - 📌 dispatch: 상태르 업데이트하도록 요청하는 함수 (👍 운영체제론의 dispatch 상태와 비슷한 느낌인 듯하다?)
    - 📌state: 말 그대로 현재의 상태 (reducer함수에서 반환하는 객체의 값이 곧  state가 된다고 생각하면 되겠다.)
    - dispatch => 상태를 변경한다

## 🤷‍♂️ 리듀서로 사용할 수 있는 이점?

    - 지금은 코드가 길어보이지만 이 리듀서만을 따로 별도의 파일로 관리하여 재사용할 수 있다.
    - VSCODE에서 함수 이름에 오른쪽 버튼을 눌러 Refactor 기능을 이용하면 별도의 파일로 꺼낼 수 있음.
