import React from 'react';
import Counter from '../components/Counter';
//컴포너트를 연동할 떄 사용하는 훅
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    // 상태를 조회하는 훅 (useSelector)
    const { number, diff } = useSelector((state) => ({
        //state는 리덕스의 현재 상태를 의미한다.
        number: state.counter.number,
        diff: state.counter.diff,
    }));
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
