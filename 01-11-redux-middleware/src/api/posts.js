const sleep = (n) => new Promise((resolve) => setTimeout(reesolve, n));

// { id, title, body }
const posts = [
    {
        id: 1,
        title: '리덕스 미들웨어를 배워봅시다.',
        body: '리덕스 미들웨어를 직접 만들어 보면 이해하기가 쉽죠.',
    },
    {
        id: 2,
        title: 'redux-thunk를 사용해 봅시다.',
        body: 'redux-thunk를 사용해서 비동기 작업을 처리해 보아요',
    },
    {
        id: 3,
        title: 'redux-saga도 사용해봅니다.',
        body: '나중에 redux-saga를 이용하여 비동기 작업을 처리하는 방법도 배워볼 거예요.',
    },
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
};

export const getPostById = async (id) => {
    await sleep(500);
    return posts.find((post) => post.id === id);
};
