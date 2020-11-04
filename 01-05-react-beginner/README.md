# React

## 1. 📕 JSX 작성 규칙

1. 태그는 반드시 닫혀야 한다.
    - input, br 같은 경우 `<input />`, `<br />` 등 `self closing` 태그를 이용하면 된다.
2. 2개 이상의 태그는 하나 이상의 태그로 감싸져야만 한다.
   다음과 같이 Fragment인 `<>`를 사용하여도 된다.

```jsx
<>
    <Hello />
    <h1>안녕하세요?</h1>
</>
```

3.  `{}`로 감싸면 js의 상수 변수를 보여줄 수 있다.
4.  HTML에서 style을 설정하는 것과는 달리 자바스크립트 객체로 작성해야 한다. (with Camel Case)

```javascript
const style = {
    backgroundColor: 'black',
    padding: '1rem',
};
```

5. JSX에서는 `class` 대신 `className`으로 클래스를 부여해야 한다.

```javascript
<>
    <div className='gray-box'></div>
</>
```

6. 주석은 `{/*내용*/}`과 같이 작성한다. - 그런데 HTML attribute를 정의하는 구간에서는 `//`로 주석을 작성한다.

```javascript
function App() {
    return (
        <div className='App'>
            <Wrapper>
                {/* 주석 */}
                <Hello
                    // 주석
                    name='react'
                    color='red'
                    isSpecial={true}
                />
                <Hello />
            </Wrapper>
        </div>
    );
}
```

## 2. Props (properties)

-   특정 값을 부모에서 자식으로 전달해주고자 할 때 작성하는 속성.

1. `props.항목명` 식으로 속성값을 자식(children) 컴포넌트에서 부모 컴포넌트가 보낸 값을 참조할 수 있음.

    - 그런데 이는 비구조화 할당 식으로 다음과 같이 간소하게 작성이 가능하다.

    ```javascript
    function Hello({ color, name }) {
        // props로 작성해도 되지만 구조분해를 해도 된다.
        console.log('🌍', name);
        return (
            <div
                style={{
                    color,
                }}
            >
                안녕하세요? {name}
            </div>
        ); // JSX
    }
    ```

2. 컴포넌트명.defaultProps로 전달받지 못한 값에 관해 기본값을 설정할 수 있다.

```javascript
Hello.defaultProps = {
    name: '이름없음',
    color: 'blue',
};
```

3. props.children 속성을 이용하여 감싸인 컴포넌트나 html을 렌더링할 수 있다. (코드 보고 이해할 것)

💾 App.js

```javascript
function App() {
    return (
        <div className='App'>
            <Wrapper>
                <Hello name='react' color='red' />
                <Hello />
            </Wrapper>
        </div>
    );
}
```

💾 Wrapper.js

```javascript
function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return <div style={style}>{children}</div>;
}

export default Wrapper;
```

## 3. useState를 통한 동적 상태 관리

-   button을 누르면 숫자가 바뀌는 예제 구현

## 4. useRef

-   useRef의 값은 바뀌더라도 컴포넌트가 리렌더링되지 않는다.

### 사용 예

-   setTimeout, setInterval의 id
-   외부 라이브러리를 사용하여 생성된 인스턴스
-   스크롤의 위치

## 5. useEffect

-   리액트 컴포넌트가 처음 나타거나 사라질 때
-   Props의 업데이트 전후
-   리런데링이 될 때마다 특정 작업 실행

### 사용 예

-   uri값을 확인하여 컴포넌트가 마운트될 때 REST API를 요청
    -   게시글번호를 기반으로 포스팅 가져와서 제목, 내용을 컴포넌트에 렌더링

```javascript
useEffect(() => {
    loadPost(username, urlSlug);
}, [username, urlSlug]);
```

## 6. useMemo

-   성능의 최적화가 필요한 상황에서 사용.
-   본 실습에서는 계정명(username)을 클릭하면 active 상태가 true/false로 토글된다.
-   토글되는 때에만 `활성 사용자 수`를 카운트하는 메서드인 `countActiveUsers` 메서드를 호출하면 된다.
    -   그러나 useMemo로 최적화하지 않은 상태에서는 입력창에 입력을 할 때에도 리렌더링되기 위해 해당 메서드가 불린다.
    -   따라서 `useMemo(countActiveUsers(users), [users])`와 같이 작성하여 불필요한 연산을 하지 않도록 방지한다.
    -   위와 같이 useMemo를 적용한 이후에는 토글이 된 때`(=users가 바뀐 경우)`에만 해당 메서드가 호출된다.

## 7. useCallback

-   함수를 위한 훅
-   onCreate, onRemove, onChange 함수를 보면 컴포넌트가 리렌더링될 때마다 매번 새로운 함수를 만들어낸다.
    -   이 자체만으로 부하가 걸리지는 않는다.
    -   그렇지만 한 번 만든 함수는 재사용할 수 있으면 재사용하면 좋다.
-   useMemo와 마찬가지로 `함수를 재사용`할 떄 사용한다고 생각하면 된다.
-   💪 참고
    -   사실 자바스크립트를 사용할 줄`만` 알았던 때는 이 useMemo와 useCallback을 왜 쓰는지 정확하게 몰랐음.
        그저 `최적화`를 해야한다고 하니까 마냥 써야하는 줄로만 생각함.
    -   그러나 [`자바스크립트 문법`](https://ko.javascript.info/)에 관해 꾸준하게 학습한 결과 이제 조금은 이러한 방법을 왜 쓰는지를 이해할 수 있었음.
    1.  함수(`function(){}`)라고 하는 것은 실행될 때마다 메모리에 생성됨.
    2.  리액트는 리렌더링을 할 때마다 함수를 호출해서 결괏값을 참조할 필요가 생김
    3.  그런데 리렌더링을 할 때마다 결괏값이 바뀌지 않을 텐데 굳이 함수를 참조하는 상황이 생김
    4.  그렇다 보니 1번과 같이 메모리에 지속적으로 생성이 됨.
        -   이 자체만으로 부하가 걸리지는 않지만 마냥 방치하는 것도 바람직한 것은 아님
    5.  이를 해결하기 위해서 `depths`에 참조하는 요소(변수, 함수 등)를 입력하고 리액트는 이 값들이 변했는지를 확인
        -   하나라도 값이 변했다면 결괏값이 달라질 수 있으므로 새로 실행을 할 것임
        -   이전과 변함이 없다면 굳이 함수를 재실행하여 똑같은 결괏값을 만들지 않고 이전에 실행한 결과를 참조

📢 어떤 상황에서 `useCallback`을 사용하고 `useMemo`를 사용해야 하는지 헷갈릴 수도 있을 테니 주의하자!
