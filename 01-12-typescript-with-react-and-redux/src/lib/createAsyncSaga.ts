import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';
type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

// Type Guard 문법
function isPayloadAction(action: any): action is PayloadAction<string, any> {
    return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
    asyncActionCreator: AsyncActionCreatorBuilder<[T1, P1], [T2, P2], [T3, P3]>,
    promiseCreator: PromiseCreatorFunction<P1, P2>
) {
    return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
        try {
            const result = isPayloadAction(action)
                ? yield call(promiseCreator, action.payload)
                : yield call(promiseCreator);
            // AsyncActionCreatorBuilder로 바뀌면서 파라미터 2개 보내야 함... (임시방편 <= 잘 작동함... 😨 뭐지)
            yield put(asyncActionCreator.success(result, result));
        } catch (e) {
            yield put(asyncActionCreator.failure(e, e));
        }
    };
}
