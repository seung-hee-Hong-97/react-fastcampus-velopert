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
