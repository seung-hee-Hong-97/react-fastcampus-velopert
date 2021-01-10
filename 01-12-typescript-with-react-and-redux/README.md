# 타입스크립트 리덕스 프로젝트 설치

-   `node_modules/모듈명/index.d.ts`: 공식적으로 타입스크립트를 지원하는 프로젝트에는 이 파일이 있음.
-   `@types/react-redux`와 같은 모듈을 설치하는 경우 공식적으로 ts를 지원하지 않아서 서드파티 라이브러리를 사용한 것을 의미
    -   그러므로 [타입서치 검색](microsoft.github.io/TypeSearch)으로 지원하는 지 알아보는 방법이 있음.

## github 사용자 정보 가져오기

-   `https://api.github.com/users/:사용자계정명`

-   api에서 반환하는 내용을 일일이 type으로 정의하면서 입력해도 되지만 [quicktype.io](https://quicktype.io)를 이용하면 빠르게 선언할 수 있다.

## 앞으로 해야 할 것

1. 서버 사이드 렌더링
    - 서버측에서 첫 렌더링 회면을 브라우저가 아니라 서버 측에서 실시함으로 페이지 로딩 속도를 단축시켜 사용자 경험 개선
    1. Next.js
    2. Razzle
2. 코드 스플리팅
    - 사용자가 페이지에 들어올 때 필요한 것만 다운로드하도록 사용자 경험 개선
    2. React.lazy
    3. loadable-components
3. 테스트 코드 작성
    1. reaect-testeing-library `Velopert 권장🏆`
    2. Enzyme `[엔자임]`
4. 상태 관리 라이브러리
    1. MobX
        - 작동 방식이 redux와는 성격과 작동방식이 완전히 다르다.
        - 꼭 써야 하는 건 아니지만 배우면 재미있음

다음 콘텐츠는 [다음](https://facebook.com/velopert)의 링크에서 업로드할 예정
해당 페이지 팔로!
