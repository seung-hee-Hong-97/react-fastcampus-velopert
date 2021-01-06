import { createAsyncAction } from 'typesafe-actions';
import { getUserProfile, GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE = `github/GET_USER_PROFILE`;
export const GET_USER_PROFILE_SUCCESS = `github/GET_USER_PROFILE_SUCCESS`;
export const GET_USER_PROFILE_ERROR = `github/GET_USER_PROFILE_ERROR`;

// export const getUserProfile = createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = createStandardAction(
//     GET_USER_PROFILE_SUCCESS
// )<GithubProfile>();
// export const getUserProfileError = createStandardAction(GET_USER_PROFILE_ERROR)<AxiosError>();

export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<any, GithubProfile, AxiosError>();
/*
    강의에서는 <undefined, GithubProfile, AxiosError>라고 했지만 typesafe-actions가 5.1.버전 대에서는 작동하지 않음.
    따라서 임시방편으로 any 타입 기재
*/
