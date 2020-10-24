// 📕 비동기 처리의 이해

function work() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms 소요');
}
console.log('work() (동기) 호출');
work();
console.log('work() (동기) 호출 끝');
console.log('===================');
//비동기
function workAsync(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {}
        const end = Date.now();
        callback(end - start);
    }, 0);
}

console.log('workAsync() (비동기) 호출 끝');
workAsync((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 소요');
});
console.log('workAsync() (비동기) 호출 끝');

//web api, 파일 읽기, 암복호화, 작업 예약 등에서 비동기 작업을 수행함.
