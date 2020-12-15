import React from 'react';
import Counter from '../components/Counter';
//컴포너트를 연동할 떄 사용하는 훅
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    /*
        useSelector 최적화 방법
            - 기존 코드는 state를 파라미터로 가져와서 사용하겠다고 선언했다.
            - 그런데 state는 액션이 생성될 때마다 값이 매번 바뀌어서 전달된다.
                state에 Todos에서 바뀌는 값도 매번 반영되므로 이곳에서 감지하게 될 것이다.
        해결법
            1. 각각 useSelector를 선언(state.counter.*)하여 관리한다.
            2. 기존 코드에서 useSelector 두 번째 파라미터에 이전 상태와 비교하는 함수를 선언해 둔다.  
                - 단, react-redux에서 제공하는 shallowEqual 메서드를 상황에 따라 사용하면 편리하다.
     */
    // 상태를 조회하는 훅 (useSelector)
    const { number, diff } = useSelector(
        (state) => ({
            //state는 리덕스의 현재 상태를 의미한다.
            number: state.counter.number,
            diff: state.counter.diff,
        }),
        // (left, right) => {
        //     return left.diff === right.diff && left.number === right.number;
        // }
        shallowEqual
    );
    //1. useSelector를 여러 번 선언하면 엉뚱한 컴포넌트의 리렌더링을 막을 수 있다.
    // const number = useSelector((state) => state.counter.number);
    // const diff = useSelector((state) => state.counter.diff);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;
