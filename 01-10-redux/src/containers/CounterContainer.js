import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    /*
        🤷‍♂️ useSelector: 상태를 조회하는 훅
    */
    const { number, diff } = useSelector((state) => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }));
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
