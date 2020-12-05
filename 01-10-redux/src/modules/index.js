import { combineReducers } from 'redux';
import counter from './counter';
// import todos from './todos';

// 🤷‍♂️ counter, todos 모듈을 합치는 방법.
const rootReducer = combineReducers({
    counter,
    // todos,
});

export default rootReducer;
 