// 📕 Async Await (ES8)

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function makeError() {
    await sleep(500);
    const error = new Error();
    throw error;
}

async function process() {
    console.log('안녕하세요!');
    await sleep(1000);
    console.log('반갑습니다.');
    return true;
}
process().then((value) => {
    console.log(value);
    /*
    이게 가능한 이유는 바로 Promise를 반환하기 때문에 가능한 일이다.
    */
});

async function processError() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}
processError();
