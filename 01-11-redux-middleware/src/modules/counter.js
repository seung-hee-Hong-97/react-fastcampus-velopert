const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// thunk 함수
// 함수에서 두 번째 파라미터인 getState는 사용할 일이 없으므로 생략한다.
export const increaseAsync = /*여기는 Thunk Creator */ () => /* ▶ 여기부터가 진짜  Thunk 함수 */ (
    dispatch
) => {
    console.log('증가 디스패치.');
    setTimeout(() => {
        dispatch(increase());
    }, Math.floor(Math.random() * 1000) + 100);
};
export const decreaseAsync = () => (dispatch) => {
    console.log('감소 디스패치..');
    setTimeout(() => {
        dispatch(decrease());
    }, Math.floor(Math.random() * 1000) + 100);
};

// 📢 초기 상태가 객체일 필요는 없다.
const initialState = 0;

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}
