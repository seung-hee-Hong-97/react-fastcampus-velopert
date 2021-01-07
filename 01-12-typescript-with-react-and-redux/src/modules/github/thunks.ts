import { Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';
// import { GithubAction } from './types';

export function getUserProfileThunk(
    username: string
) /*: ThunkAction<void, RootState, null, GithubAction>*/ {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        const { request, success, failure } = getUserProfileAsync;
        dispatch(request());
        try {
            const userProfile = await getUserProfile(username);
            dispatch(success(userProfile));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}
