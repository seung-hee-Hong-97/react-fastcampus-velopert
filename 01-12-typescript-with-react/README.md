# 타입스크립트 with React

## 개요

자바스크립트에서는 타입을 선언하지 않아서 어떠한 유형을 담아도 상관이 없다.
바로 이러한 자유로움 때문에 이 변수가 배열을 처리하려고 선언한 것인지 string을 처리하려고 선언한 것인지 헷갈릴 수도 있다.
그리고 이러한 현상이 발생하는지를 확인하려면 코드가 실행돼야 실수인지 아닌지 알 수 있다.

```js
let value = 5;
value = '안녕하세요';
value = [1, 2, 3, 4, 5];
value = null;
```

타입스크립트를 사용하면 IDE에서 많은 도움을 얻을 수 있다.
예를 들어 함수를 사용할 때 넣어야 하는 함수 파라미터 등을 바로 알 수 있어서 사소한 실수를 방지할 수 있다.
이는 모두 타입 추론이 가능하기 때문이다.

**💯 자바스크립트를 알고 있으면 정말 금방 배운다**

리액트를 다룰 수만 있다면 충분히 문제되지 않을 정도로 배운다.

[타입스크립트 원문](https://typescriptlang.org/docs/handbook/basic-types.html)
[타입스크립트 한국어 번역본](https://typescript-kr.github.io)

# typescript로 만든 react 프로젝트

기존에는 다음과 같이 명령어를 사용하였다.

```
npx create-react-app 프로젝트명 --typescript
```

그러나 언제부터서인가 도입된 `--template` 옵션이 때문인지 create-react-app 사용법이 바뀌었다.
따라서 다음부터는 이와 같이 `--template` 옵션을 사용하여 프로젝트를 생성하여야 한다.

```
npx create-react-app 프로젝트명 --template typescript
```
