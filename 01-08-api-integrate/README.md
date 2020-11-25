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
