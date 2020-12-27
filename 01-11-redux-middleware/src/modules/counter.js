// redux-sga/effect: redux-saga의 미들웨어가 수행하도록 작업을 명령하는 것
import { delay, put, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
    yield delay(1000); // 리덕스 미들웨어에게 이펙트를 yield하면 된다.
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

// 여러 가지 saga를 가지고 root saga를 만드는 방식을 취할 것이므로 export한다.
export function* counterSaga() {
    //INCREASE_ASYNC라는 액션이 디스패치될 때마다 increaseSaga함수를 처리한다는 뜻임
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // 가장 마지막으로 들어오는 DECREASE_ASYNC만 decreaseSaga를 처리한다. 기존 것은 무시하고 마지막 것만 처리
    // yield takeLatest(DECREASE_ASYNC, decreaseSaga);
    // 가장 먼저 들어온 것만 처리
    yield takeLeading(DECREASE_ASYNC, decreaseSaga);
}

// thunk 함수
// 함수에서 두 번째 파라미터인 getState는 사용할 일이 없으므로 생략한다.
// export const increaseAsync = /*여기는 Thunk Creator */ () => /* ▶ 여기부터가 진짜  Thunk 함수 */ (
//     dispatch
// ) => {
//     console.log('증가 디스패치.');
//     setTimeout(() => {
//         dispatch(increase());
//     }, Math.floor(Math.random() * 1000) + 100);
// };
// export const decreaseAsync = () => (dispatch) => {
//     console.log('감소 디스패치..');
//     setTimeout(() => {
//         dispatch(decrease());
//     }, Math.floor(Math.random() * 1000) + 100);
// };

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
