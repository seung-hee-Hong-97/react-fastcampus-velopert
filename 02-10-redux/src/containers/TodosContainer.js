import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onCreate = useCallback((text) => dispatch(addTodo(text)));
    const onToggle = useCallback((id) => dispatch(toggleTodo(id)));

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;

/*
 📕 복습하기 (01-05-react-beginner 참조)
    ## 7. useCallback
    -   함수를 위한 훅
    -   onCreate, onRemove, onChange 함수를 보면 컴포넌트가 리렌더링될 때마다 매번 새로운 함수를 만들어낸다.
        -   이 자체만으로 부하가 걸리지는 않는다.
        -   그렇지만 한 번 만든 함수는 재사용할 수 있으면 재사용하면 좋다.
    -   useMemo와 마찬가지로 `함수를 재사용`할 떄 사용한다고 생각하면 된다.
    -   💪 참고
        -   사실 자바스크립트를 사용할 줄`만` 알았던 때는 이 useMemo와 useCallback을 왜 쓰는지 정확하게 몰랐음.
            그저 `최적화`를 해야한다고 하니까 마냥 써야하는 줄로만 생각함.
        -   그러나 [`자바스크립트 문법`](https://ko.javascript.info/)에 관해 꾸준하게 학습한 결과  
            이제 조금은 이러한 방법을 왜 쓰는지를 이해할 수 있었음.
        1.  함수(`function(){}`)라고 하는 것은 실행될 때마다 메모리에 생성됨.
        2.  리액트는 리렌더링을 할 때마다 함수를 호출해서 결괏값을 참조할 필요가 생김
        3.  그런데 리렌더링을 할 때마다 결괏값이 바뀌지 않을 텐데 굳이 함수를 참조하는 상황이 생김
        4.  그렇다 보니 1번과 같이 메모리에 지속적으로 생성이 됨.
            -   이 자체만으로 부하가 걸리지는 않지만 마냥 방치하는 것도 바람직한 것은 아님
        5.  이를 해결하기 위해서 `depths`에 참조하는 요소(변수, 함수 등)를 입력하고 리액트는 이 값들이 변했는지를 확인
            -   하나라도 값이 변했다면 결괏값이 달라질 수 있으므로 새로 실행을 할 것임
            -   이전과 변함이 없다면 굳이 함수를 재실행하여 똑같은 결괏값을 만들지 않고 이전에 실행한 결과를 참조
    📢 어떤 상황에서 `useCallback`을 사용하고 `useMemo`를 사용해야 하는지 헷갈릴 수도 있을 테니 주의하자!
*/
