# 타입스크립트 리덕스 프로젝트 설치

-   `node_modules/모듈명/index.d.ts`: 공식적으로 타입스크립트를 지원하는 프로젝트에는 이 파일이 있음.
-   `@types/react-redux`와 같은 모듈을 설치하는 경우 공식적으로 ts를 지원하지 않아서 서드파티 라이브러리를 사용한 것을 의미
    -   그러므로 [타입서치 검색](microsoft.github.io/TypeSearch)으로 지원하는 지 알아보는 방법이 있음.

## github 사용자 정보 가져오기

-   `https://api.github.com/users/:사용자계정명`

-   api에서 반환하는 내용을 일일이 type으로 정의하면서 입력해도 되지만 [quicktype.io](https://quicktype.io)를 이용하면 빠르게 선언할 수 있다.
