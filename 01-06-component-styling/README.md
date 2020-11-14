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
