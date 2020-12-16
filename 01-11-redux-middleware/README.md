# 리덕스 미들웨어

-   리덕스가 지니는 핵심 기능이다. (리덕스의 꽃)
-   Context API, MobX와 비교했을 때 차별화할 수 있는 기능이다.
-   이 기능을 사용하지 않으면 차라리 Context API를 사용하는 것이 낫다.
    -   왜냐하면 굳이 리덕스 없이도 Context API로도 구현이 가능하니까.

## 리덕스 미들웨어

-   액션 → 미들웨어 → 리듀서 → 스토어
    -   특정 조건에 따라 액션이 처리되지 않도록 미들웨어 단에서 무시할 수도 있다.
    -   미들웨어를 사용해서 액션이 리듀서에 전달되므로 특정 코드를 첨가할 수 있다.
        -   ex) 액션의 payload값을 수정하거나 콘솔에 값을 출력, 또 다른 값을 만들어서 dispatch 등...
-   주로 비동기 작업을 처리할 떄 사용한다.
    -   API 요청하기

## 리덕스 미들웨어의 종류

-   redux-thunk (✔ 튜토리얼에서 다룰 내용)
-   redux-saga (✔ 튜토리얼에서 다룰 내용)
-   redux-observable (Rx.js를 아는 경우 redux-observable을 배우기 수월하다.)
-   redux0promise-middleware (Promise에 기반한 미들웨어)

## 다룰 내용

-   리덕스 미들웨어 직접 만들기
-   redux-logger 사용하기
-   redux-thunk 사용하기
-   redux-saga 사용하기
