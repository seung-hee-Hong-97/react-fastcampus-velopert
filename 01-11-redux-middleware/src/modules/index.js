import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import posts from './posts';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ counter, posts });
export function* rootSaga() {
    yield all([counterSaga() /*, 또 다른 saga 등록*/]);
}

export default rootReducer;
