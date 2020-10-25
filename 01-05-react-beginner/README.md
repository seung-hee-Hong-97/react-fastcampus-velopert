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

export default Wrapp;
```