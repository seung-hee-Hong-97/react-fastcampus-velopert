/* 
    🤷‍♂️
    접두사(counter/)를 붙여 다른 모듈과 이름이 겹치지 않게 한다.
 */
const SET_DIFF = 'counter/SET_DIFF'; // 몇 씩 더할지
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
    number: 0,
    diff: 1,
};

// 모듈 이름으로 리듀서를 작성한다.
export default function counter(state = initialState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff,
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff,
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff,
            };
        default:
            return state;
    }
}
