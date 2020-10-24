// 📕 Promise 비동기 처리
// 비동기작업을 쉽게 처리하기 위해 도입된 기능
// callback hell을 피하기 위해서 생겨난 기법.
//초반에는 라이브러리었지만 공식적으로 지원하기 시작하게 되었음.

function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
    }, 100);
}

increaseAndPrint(0, (n) => {
    increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
            increaseAndPrint(n, (n) => {
                increaseAndPrint(n, (n) => {
                    console.log('작업 끝!', n);
                });
            });
        });
    });
});

const myPromise = new Promise((resolve, reject) => {
    //구현...
    setTimeout(() => {
        resolve('result'); // 성공하는 상황
        // reject(new Error()); // 실패하는 상황
    }, 1000);
});

myPromise.then((result) => {
    console.log(result);
});

console.log('===');

function increaseAndPrintWithPromise(n) {
    console.log('increaseAndPrintWithPromise 호출됨');
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(`increaseAndPrintWithPromise result is  ${value}`);
            resolve(value);
        })
    );
}

increaseAndPrintWithPromise(1)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .then(increaseAndPrintWithPromise)
    .catch((error) => {
        console.log(error);
    });
