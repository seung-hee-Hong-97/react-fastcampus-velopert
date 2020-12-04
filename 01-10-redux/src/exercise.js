import { createStore } from 'redux';

/* 
    🤷‍♂️ 리액트 없이 javascript에서 리덕스 사용해 보기.
    index.js에서 다음의 구문을 추가하여 테스트한다.
    😍 import './exercise';
*/

const initialState = {
    counter: 0,
    text: '',
    list: [],
};

/* ACTION TYPE 정의 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* ACTION 생성 함수 */
const increase = () => ({
    type: INCREASE,
});

const decrease = () => ({
    type: DECREASE,
});

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text,
});

const addToList = (item) => ({
    type: ADD_TO_LIST,
    item,
});

/*
    🤷‍♂️ 리덕스에서 초기 상태를 만들 떄 reducer를 한 번 호출한다.
        그런데 이때 state = undefined일 경우에는 
        default 부분에서 undefined를 반환하므로 초기상태가 제대로 만들어지지 않는다.
 */
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item),
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log(store.getState());

// store 구독 (상태가 변할 때마다 이하 함수가 호출된다. )
const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener); // unsubscribe라는 함수를 만들어 준다.
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요? redux입니다.'));
store.dispatch(addToList({ id: 1, text: '와우~ ' }));

// 🎫 콘솔 디버깅
window.store = store;
window.unsubscribe = unsubscribe;
