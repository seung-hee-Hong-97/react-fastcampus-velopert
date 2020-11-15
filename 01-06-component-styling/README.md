# 🎨 컴포넌트 스타일링

-   [Sass 가이드](https://sass-lang.com/guide)
-   [Playground](https://www.sassmeister.com)
-   Styled component
-   CSS Modules
-   Sass
    -   Syntactically awesome stylesheets
    -   굳이 우리말로 옮기자면 `문법적으로 짱 멋진 스타일시트`
-   본 튜토리얼에서는 SCSS 문법으로 사용

## 1. 생김새

### .sass 문법

-   중괄호 대신 들여쓰기
-   세미콜론 대신 줄바꿈
-   그러나 이러한 점이 개발자가 헷갈려할 수 있음.

```sass
nav
    ul
        margin: 0
        padding: 0
        list-style: none
    li
        display: inline-block
    a
        display: block
        padding: 6px 12px
        text-decoration: non
```

### .scss 문법

```scss
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: inline-block;
    }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

## 2. SCSS의 기능

### @mixin

-   특정 값만 다르고 반복되는 속성을 지정할 때 사용

```scss
//반복되는 속성은 다음의 mixin을 사용하여 재활용할 수 있음.
@mixin button-color($color) {
    background: $color;
    &:hover {
        background: lighten($color, 10%);
    }
    &:active {
        background: darken($color, 10%);
    }
}
```

### @include

-   mixin으로 정의한 속성을 이용하여 속성을 적용하기 위해 사용

```scss
&.blue {
    @include button-color($blue);
}

&.gray {
    @include button-color($gray);
}

&.pink {
    @include button-color($pink);
}
```

## 3. 기타

### 컴포넌트의 rest props

-   예를들어 해당 컴포넌트의 `onClick`이벤트를 지정하고자 한다면 다음과 같이 선언하면 된다.

💾 App.js

```js
return (
    <Button
        onClick={() => {
            console.log('클릭 이벤트 발생');
        }}
    >
        버튼
    </Button>
);
```

💾 Button.js

```js
function Button({ children, onClick }) {
    return <button onClick={onClick}>{children}</button>;
}
```

-   그런데 문제는, `onMouseMove`, `onMouseDown`, `onMouseUp` 등 유동적으로 Props 추가가 필요한 경우이다.
-   그렇다면 가장 쉽게 떠오르는 방법은 일일이 이 속성을 지정해주면 될 일이다.

💾 App.js

```js
return (
    <Button
        onClick={() => {
            console.log('클릭 이벤트 발생');
        }}
        onMouseMove={() => {
            console.log('마우스 움직임');
        }}
        onMouseDown={() => {
            console.log('마우스 다운');
        }}
    />
);
```

💾 Button.js

```js
function Button({ children, onClick, onMouseMove, onMouceDown }) {
    return (
        <button color onClick={onClick}>
            {children}
        </button>
    );
}
```

-   🤷‍♂️ 그렇다면 더 많은 이벤트가 추가된다면 ? 모든 컴포넌트가 이에 해당된다면? 😱 밤을 새야 할까?
-   이럴 때 사용하는 것이 바로 `...rest`이다. Rest Props로 위의 코드를 간소화할 수 있다.

💾 App.js

```js
return (
    <Button
        onClick={() => {
            console.log('클릭 이벤트 발생');
        }}
        onMouseMove={() => {
            console.log('마우스 움직임');
        }}
        onMouseDown={() => {
            console.log('마우스 다운');
        }}
    />
);
```

💾 Button.js

```js
// 🤷‍♂️ 이렇게 간단하게 해결된다니 ?!
function Button({ children, ...rest }) {
    return <button {...rest}>{children}</button>;
}
```

## 4. CSS MODULES

-   컴포넌트를 스타일링할 때 CSS MODULES기술을 이용하면 class 이름이 겹치는 것을 방지할 수 있다.
-   css 파일의 이름을 `.module.css`로 끝내면 된다.
-   별도의 npm 패키지를 설치할 필요가 없다.
-   📢다음의 상황에서 도입하면 좋다.
    -   레거시 프로젝트에 리액트를 도입할 때
    -   CSS 클래스 네이밍 규칙을 만들기가 귀찮을 때

💾 Box.module.css

```css
.Box {
    background: black;
    color: white;
    padding: 2rem;
}
```

💾 Box.js

```js
import React from 'react';
import styles from './Box.module.css';
function Box() {
    return <div className={styles.Box}>{styles.Box}</div>;
}
export default Box;
```

-   위와 같이 지정한다면 `_src_Box_module__Box`와 같이 클래스 이름이 고유화되어 클래스명이 지정된다.

## 5. CSS in JS

### styled-components

-   `emotion`, `styled-jsx`, `jss` 등의 유사 라이브러리가 있으나 styled-components가 가장 인기가 많다.
    -   그러나 이것이 곧 `styled-components`가 정답이라는 것을 의미하지는 않는다.
-   `Tagged Template Literal` 문법을 사용하여 SCSS를 작성하면 된다.

```js
import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: black;
    border-radius: 50%;
`;

function App() {
    return <Circle />;
}

export default App;
```

-   🤷‍♂️ 잠깐만!! `Tagged Template Literal`이 뭐지?
    -   구성을 완벽히 이해할 필요는 없다. 그러나 어떠한 원리로 돌아가는지 알면 좋기 때문에 학습하고자 함.

#### Template Literal이란?

다음과 같이 `Template Literal`을 사용하면 `hello react`처럼 의도한 결과를 출력시킬 수 있다.

```js
const name = 'react';
const message = `hello ${name}`;
console.log(message);
// 결과: "hello react"
```

그런데 object를 이와 같이 사용하면 `[object Object]`라고 출력된다.

```js
const object = { a: 1 };
const text = `${object}`;
console.log(text);
// "[object Object]"
```

function의 경우에도 선언 내용이 그대로 출력된다.

```js
const fn = () => true;
const msg = `${fn}`;
console.log(msg);
// "() => true"
```

#### Tagged Template Literal이란?

```js
const red = '빨간색';
const blue = '파란색';

function favoriteColors(texts, ...values) {
    console.log(texts); // text에서는 문자열이 들어간 대로 분리되어 담긴다.
    console.log(values); // red, blue값이 배열로 담긴다.
}

favoriteColor`제가 좋아하는 색은 ${red}과 ${blue}입니다.`;
// (3) ["제가 좋아하는 색은 ", "과" , "입니다.", raw: Array(3)]
// (2) ["빨간색", "파란색"]
```

```js
const red = '빨간색';
const blue = '파란색';

function favoriteColors(texts, ...values) {
    return texts.reduce(
        (result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ''}`,
        ''
    );
}

favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`;
//제가 좋아하는 색은 <b>빨간색</b>과 <b>파란색</b>입니다.
```

바로 styled-components는 이러한 Tagged Template Literal의 원리를 활용한다.

```js
const StyledDiv = styled.div`
    background: ${(props) => props.color};
`;

const MyComponent = () => <StyledDiv color='black' />;
```

```js
function sample(texts, ...fns) {
    const mockProps = {
        title: '안녕하세요',
        body: '내용은 내용내용입니다.',
    };
    return texts.reduce(
        (result, text, i) => `${result}${text}${fns[i] ? fns[i](mockProps) : ''}`,
        ''
    );
}
sample`
    제목: ${(props) => props.title}
    내용: ${(props) => props.body}
`;
/*
"
    제목: 안녕하세요
    내용: 내용은 내용내용입니다.
"
*/
```

1. 위에서 fns값에 담기는 내용은 함수이다.
   1-1. `props => props.title` 함수
   1-2. `props => props.body` 함수
2. 바로 이 함수가 fns라는 배열에 담겨 reduce함수가 실행될 때
   fns[i]에 따라 파라미터인 mockProps를 넘겨 함수가 실행되는 것이다.
3. 1-1의 함수에 도달하였을 때는 title을 추출할 것이고
4. 1-2의 함수에 도달하였을 때는 body를 추출할 것이다.
