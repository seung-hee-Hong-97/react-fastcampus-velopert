// 📕 자바스크립트 Scope

/* 

🌍 Global (전역)
🎹 Function (특정 함수 내부)
🗨 Block ({})

*/

const value = 'hello!';

function myFunction() {
    console.log('myFunction');
    console.log(value); // hello
}

function otherFunction() {
    console.log('otherFunction: ');
    const value = 'bye!';
    console.log(value); // bye!
}

myFunction();
otherFunction();

console.log('Global scope: ', value); // hello

//

console.log('=====');
function yourFunction() {
    const value = 'bye!';
    const anotherValue = 'world!';
    function functionInside() {
        console.log('functionInside:', value, anotherValue);
    }
    functionInside();
}

yourFunction();
// console.log('global sclope:', value, anotherValue); //anotherValue is not defined 글로벌 스코프에 없으므로...

// 블록스코프
console.log('=====');
function blockFunction() {
    const value = 'bye!';
    if (true) {
        const value = 'world!';
        console.log('if block scope', value);
    }
    console.log('function scope', value);
}
blockFunction();
