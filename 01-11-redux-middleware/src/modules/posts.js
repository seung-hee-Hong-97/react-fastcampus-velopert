import * as postsAPI from '../api/posts';
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

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

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: reducerUtils.loading(state.posts.data),
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: reducerUtils.success(action.payload),
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: reducerUtils.error(action.payload),
            };
        case GET_POST:
            return {
                ...state,
                post: reducerUtils.loading(),
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: reducerUtils.success(action.payload),
            };
        case GET_POST_ERROR:
            return {
                ...state,
                post: reducerUtils.error(action.payload),
            };
        default:
            return state;
    }
    return state;
}
