import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { getPost } from '../modules/posts';

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(
        (state) => state.posts.post[postId] || reducerUtils.initial()
    );
    const dispatch = useDispatch();

    useEffect(() => {
        // if(data) return; // 데이터가 이미 있으면 아예 요청하고 싶지 않을 때
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if (loading && !data) return <div>로딩 중...</div>;
    if (error) return <div>오류 발생: {error}</div>;
    if (!data) return null;

    return <Post post={data} />;
}

export default PostContainer;
