import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    /*
        🤷‍♂️ useSelector: 상태를 조회하는 훅
        그러나 selector에서 매번 객체를 만들고 있는 것이 문제점이다.
    */
    // const { number, diff } = useSelector((state) => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff,
    // }));
    // ✅ 첫 번째 해결방법: useSelector를 각각 적용시키기
    // const number = useSelector((state) => state.counter.number);
    // const diff = useSelector((state) => state.counter.diff);
    // ✅ 두 번째 해결방법: equalityFn을 사용하여 전과 후의 값을 비교한다.
    const { number, diff } = useSelector(
        (state) => ({
            number: state.counter.number,
            diff: state.counter.diff,
        }),
        /* 
            🤷‍♂️ 전과 후의 값을 비교하는 함수를 임의로 만들 수도 있지만,
            이 경우에는 shallowEqual이라는 제공되는 함수를 사용해도 된다.
            (left, right) => {
            // 전과 후의 값이 같은 경우인지 아닌지를 판별한다.
            // return left.diff === right.diff && left.number === right.number;
        }*/
        /*
            .😱 그러나 말그대로 Shallow(얕은 수준) 레벨의 비교이므로
            객체 안의 객체는 판별하지 않는다는 점에 주의한다.
            그러므로 불변성을 유지하면서 객체의 값을 바꿔야 객체 안의 객체가 감지될 수 있는 것이다.
            따라서 리덕스에서는 불변성을 지켜주면서 작업을 한다고 생각하면 된다!
        */
        shallowEqual
    );
    /* 
        🤷‍♂️ Action을 dispatch할 때는 useDispatch를 사용한다.
    */
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
