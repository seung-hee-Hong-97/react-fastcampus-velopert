# React Hooks

# 미리보기

-   useState
-   useEffect
-   useRef
-   useContext
-   useMemo
-   useCallback
-   ⭐**useReducer**

# 내용

## React Hooks란?

-   기존 Class를 활용한 컴포넌트 설정 방법을 개선한 것으로 알고 있음.
-   코드의 가독성이 좋아지고 컴포넌트의 재사용성을 개선하기 위하여 사용하는 기법
-   특정 상태가 변경되었을 때 처리해야 하는 로직을 명시한 함수를 인잣값으로 하여 해당 로직을 실행하도록 함.

### 콜백함수

-   다른 함수의 인자로 전달된 함수를 의미

## useState

-   컴포넌트가 가질 수 있는 상태
-   state값이 변경될 때마다 리렌더링
-   useState 값을 선언하고 초기화할 때 그 작업이 오래 걸리는 작업이라면
    함수 안에 콜백함수를 감싸 선언하여 최초 1회만 수행하도록 할 수 있음. - 컴포넌트가 리렌더링될 때마다 무거운 작업이 되풀이되는 것을 예방

## useEffect

-   컴포넌트가 마운트, 업데이트, 언마운트되었을 때 실행되는 훅.

<aside>
✏️ Mount → Update(Remount) → UnMount

</aside>

```jsx
useEffect(() => {

}, [/*원솟값의 변동이 일어난 경우에만 작동*/ dependency array]);

useEffect(() => {
	// 렌더링될 때마다 실행
  // 구독 상태
	return () => {/*구독 해지*/}
});
```

## useRef

Ref Object를 반환한다.

1. 값을 저장하는 저장공간
    1. 상탯값의 변경으로 리렌더링이 되는 것을 피하고 싶을 때 사용
        1. 컴포넌트 내부 변수들이 초기화되는 것을 막는다.
2. DOM 에 직접 접근
    1. input 상자의 focus 등 직접적인 DOM 조작에 사용
    2. document.querySelector을 사용하는 효과

## useContext

### Context

<aside>
✏️ 트리가 깊어질수록 값을 추적하기 어려워져서 전역에서 관리하는 것

리액트로 만든 앱은 여러 개의 컴포넌트로 구성된다.

최상위 루트 컴포넌트부터 아래 컴포넌트로 트리 형태로 뻗어나가는데 이때 props로 값을 전달할 수 있다

</aside>

### useContext

<aside>
✏️ Context를 참조할 때 사용하는 훅
다양한 레벨에 있는 많은 컴포넌트에 전역적인 데이터를 전달하기 위함

</aside>

### useContext VS REDUX와의 차이점

[Redux vs. React Context 어떤것을 써야할까?](https://slee2540.tistory.com/59)

## useMemo

-   컴포넌트 성능 최적화 시 사용
-   Memoization: 동일한 값을 리턴하는 함수를 반복적으로 호출할 때를 대비하여 메모리에 저장해둔 뒤 다시 계산하지 않고 저장된 값을 반환하는 기법 (캐싱과 유사)
    ```jsx
    function caculate() {}
    function Component() {
        const value = useMemo(() => calculate, [dependency]);
    }
    // dependency값이 바뀔 때마다 다시 계산
    ```
-   따로 메모리를 할당받아 값을 저장하는 것이므로 필요할 때 적절하게 사용

## useCallback

-   컴포넌트 성능 최적화 시 사용
-   컴포넌트 내 콜백함수를 메모이제이션
-   함수도 객체이기 때문에 해당 컴포넌트가 리렌더링될 때 함수도 새로 생성된다. 이 현상을 방지

## ⭐ useReducer

### 장점

-   useState를 여러 번 사용하지 않아도 된다.
-   리듀서로 로직을 분리했으니 다른 곳에서 쉽게 재사용할 수 있음

### 용도

-   여러 개의 하위값을 포함하는 **복잡한 객체의 상태 변경**할 때 쓰면 좋다

### dispatch (철수)

-   상태 변경을 요청하는 주체

### action (송금해주세요)

-   상태 변경을 위한 구체적인 내용

### reducer (은행)

-   상태를 변경하는 주체
