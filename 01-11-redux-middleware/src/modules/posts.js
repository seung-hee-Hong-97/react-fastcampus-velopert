import * as postsAPI from '../api/posts';
import { createPromiseThunk, handleAsyncActions, reducerUtils } from '../lib/asyncUtils';

// 포스트 복수 개 불러오기
// 특정 요청이 시작되었을 떄를 알리는 액션
const GET_POSTS = 'GET_POSTS';
// 액션이 성공하였음을 알림
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
// 실패하였으므로 오류가 발생했음을 알림
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

// 포스트 1개 불러오기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST';

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = (id) => async (dispatch) => {
    dispatch({ type: GET_POST, meta: id });
    try {
        const payload = await postsAPI.getPostById(id);
        dispatch({ type: GET_POST_SUCCESS, payload, meta: id });
    } catch (error) {
        dispatch({
            type: GET_POST_ERROR,
            payload: error,
            error: true,
            meta: id,
        });
    }
};

export const clearPost = () => ({ type: CLEAR_POST });

const initialState = {
    posts: reducerUtils.initial(),
    post: {},
};

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
const getPostReducer = (state, action) => {
    const id = action.meta;
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id]: reducerUtils.loading(state.post[id] && state.post[id].data),
                },
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id]: reducerUtils.success(action.payload),
                },
            };
        case GET_POST_ERROR:
            return {
                ...state,
                post: {
                    ...state.post,
                    [id]: reducerUtils.error(action.payload),
                },
            };
        default:
            return state;
    }
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action);
        case CLEAR_POST:
            return {
                ...state,
                post: reducerUtils.initial(),
            };
        default:
            return state;
    }
}
