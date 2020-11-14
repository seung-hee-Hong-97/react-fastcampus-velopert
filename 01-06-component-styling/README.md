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
