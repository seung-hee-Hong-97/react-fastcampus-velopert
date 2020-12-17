// const myLogger = (store) => (next) => (action) => {
//     console.log(action);
//     console.log('\tPrev:', store.getState());
//     const result = next(action);
//     console.log('\tNext:', store.getState());
//     return result;
// };
function myLogger(store) {
    // store 객체
    return function (next) {
        // next는 미들웨어에서 액션을 받아왔을 때 다음 미들웨어에 전달하는 함수이다.
        return function (action) {
            // 액션 객체
            // 하고 싶은 작업
            console.log(action);
            console.log('\tPrev:', store.getState());
            const result = next(action);
            console.log('\tNext:', store.getState());
            return result;
        };
    };
}
export default myLogger;
