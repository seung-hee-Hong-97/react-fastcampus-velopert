# React

## 어쩌다가 리액트를 만들게 되었을까?

### Javascript를 사용한 DOM 변형

-   사용자와 인터랙션이 자주 발생하고 이에 따라 동적으로 UI를 표현해야 한다면
    코드가 다양해질 것이고 관리하기가 어려울 것이다.
    숙련된 자바스크립트 코더라고 하더라도 웹 애플리케이션의 규모가 커지게 되면 DOM을 건드리며 작업하는 것이 꽤 복잡해진다.
-   이벤트 핸들러가 DOM을 업데이트하는 과정이 복잡해지기 때문에 어떤 이벤트 핸들러가 DOM을 어떻게 건드렸는지 추적하기가 매우 어려워지게 된다.
    -   그래서 Embver, Backbone, AngularJS에서는 DOM 업데이트 방식을 간소화하였다.
-   그러나 리액트의 경우에는 발상이 다르다.
    -   아예 다 날려버리고 처음부터 모든 것을 새롭게 만들어 보여주면 어떨까 하는 것에서 시작되었다.
    -   업데이트를 어떻게 해야할지에 관한 고민을 하지 않아도 되므로 계산이 굉장히 편해진다.
    -   그러나 동적인 UI를 보여주기 위해서 모든 것을 새롭게 만들게 된다면 느려지게 될 것이다.
    -   그래서 `Virtual DOM`을 도입하여 성능을 챙겼다. 브라우저에서 실제로 보여주는 DOM이 아닌 메모리 상에 존재한다. 작동 성능도 훨씬 빠르다.
    -   Real DOM과 Virtual DOM을 비교하는 알고리즘을 수행하여 차이점을 발견하고 그 차이점에 관한 필요한 변화만을 반영해 준다. 이를 통해 리액트에서는 정말 필요한 연산만 발생시키면서 빠른 성능을 챙길 수 있었다.
-   따라서 UI를 어떻게 업데이트 할지가 아닌 `UI를 어떻게 보여줄지를 집중`하면 된다.

## 1. 📕 JSX 작성 규칙

-   ※ 참고: 리액트에서 컴포넌트의 생김새를 정의할 때 사용하는 `문법`이고 이도 사실은 자바스크립트이다.
    -   바벨이라는 도구를 사용하여 자바스크립트 코드로 변환을 하는 과정을 거치게 된다.

```js
<div>
    <strong>Hello</strong>,<span>React</span>
</div>
```

```js
'use strict';

/*#__PURE__*/
React.createElement(
    'div',
    null,
    // React.createElement를 이용하여 React 컴포넌트를 만든다.
    /*#__PURE__*/ React.createElement('strong', null, 'Hello'),
    ',',
    /*#__PURE__*/ React.createElement('span', null, 'React')
);
```

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

```js
const style = {
    backgroundColor: 'black',
    padding: '1rem',
};
```

5. JSX에서는 `class` 대신 `className`으로 클래스를 부여해야 한다.

```js
<>
    <div className='gray-box'></div>
</>
```

6. 주석은 `{/*내용*/}`과 같이 작성한다. - 그런데 HTML attribute를 정의하는 구간에서는 `//`로 주석을 작성한다.

```js
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

    ```js
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

```js
Hello.defaultProps = {
    name: '이름없음',
    color: 'blue',
};
```

3. props.children 속성을 이용하여 감싸인 컴포넌트나 html을 렌더링할 수 있다. (코드 보고 이해할 것)

💾 App.js

```js
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

```js
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
-   그런데 부모 컴포넌트가 다시 렌더링되면 자식 컴포넌트도 다시 렌더링된다.
    -   그렇다고 해서 브라우저에 변화가 발생할 때는 내용이 업데이트된 DOM에만 반영되겠지만,
        실제로 Virtual DOM에서는 모든 렌더링에 다시 렌더링 작업을 하고 비교하여 DOM에 그리기 작업을 수행하는 것이다.
    -   많은 컴포넌트가 리렌더링된다면 이것으로 인해 느려질 수도 있으므로
        컴포넌트 성능 최적화가 필요하다는 점에 유의한다.

### 사용 예

-   uri값을 확인하여 컴포넌트가 마운트될 때 REST API를 요청
    -   게시글번호를 기반으로 포스팅 가져와서 제목, 내용을 컴포넌트에 렌더링

```js
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

## 8. React.memo (📌 다시 듣기)

🎵 feat. [useState의 함수형 업데이트](https://react.vlpt.us/basic/07-useState.html)

-   Props가 바뀌었을 때만 다시 렌더링
-   현재 프로젝트에서 `UserList`, `User` 컴포넌트는 Props가 바뀌지 않았을 떄 🎨리렌더링을 방지하도록 설정했는데 문제가 있다..
    -   그런데 App.js에 `onRemove`, `onToggle`에는 `users`를 Dependency로 가지고 있다.
        -   여기서 Dependency로 가진 `users`의 배열이 바뀌면 `onToggle`도 새로 바뀐다.
            -   이때 `UserList`입장에서는 `users`의 구성이 바뀌었으므로 🎨리렌더링한다.
            -   `User` 컴포넌트도 마찬가지로 `onToggle`, `onRemove`가 바뀌었으므로 🎨리렌더링을 수행한다.
    -   이러한 문제를 해결하기 위해서는 `Dependency`로써 `users`를 참조하지 말고  
        [useState의 함수형 업데이트](https://react.vlpt.us/basic/07-useState.html)를 수행하는 것이다.
-   모든 컴포넌트에 적용하는 것이 아니라 최적화가 필요하다고 생각되는 컴포넌트에 한해 적용한다.

## 9. useReducer

💾 Counter.js를 참조

-   상태 업데이트 로직은 컴포넌트 밖으로 분리하여 저장할 수 있음.
-   형식
    ```js
    dispatch({
        type: 'INCREMENT',
        diff: 4,
    });
    ```
-   `reducer`: 상태를 업데이트하는 함수
    ```js
    //현재 상태와 액션 객체를 받아와서 업데이트된 상태를 반환하는 함수
    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }
    ```
-   사용법
    ```js
    // reducer함수와 기본값을 초깃값으로 설정
    const [number, dispatch] = useReducer(reducer, 0);
    ```
    -   `number`: 현재 상태
    -   `dispatch`: 액션을 발생시키는 함수 (dispatch: 급파하다, 보내다)

### useReducer vs useState

어떨 때 `useReducer`를 쓰고 어떨 때 `useState`를 사용할까?

-   컴포넌트에서 관리하는 값이 여러 개여서 상태의 구조가 복잡해진다면? `useReducer`가 좋다.
-   단순한 컴포넌트의 값이고 문자, 숫자, 불린 형이라면 `useState`가 좋다.

그러나 이럴 때는 `무조건` 둘 중 하나가 100% 정답이 될 수는 없다.

## 10. Custom Hook

-   컴포넌트를 만들다 보면 반복되는 로직이 있다.
    -   예를들어 이와 같이 새로운 상태를 설정하는 콜백 이벤트 함수를 반복해서 작성하는 경우
    ```js
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };
    ```
-   이런 경우 별도로 직접 커스텀 훅을 만들어서 상태를 관리하도록 하면 반복되는 코드를 줄일 수 있고 관리가 용이해진다.

## 11. Context API 만들기

-   컴포넌트에서 하위 컴포넌트로 객체(콜백함수 등)를 전달해야 하는 경우가 있다. 이럴 떄는 Props를 이용해서 넘기면 된다.
-   그런데 컴포넌트 간 Props를 여러 번 넘길 경우 구조가 복잡해진다. 따라서 이럴 경우에는 Context API를 이용하여 간편하게 데이터를 전달할 수 있다.
