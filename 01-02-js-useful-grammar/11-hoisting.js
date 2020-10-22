// 📕 Hoisting
/*
    호이스팅은 선언 전에 호출하거나 참조하더라도 값이 출력되는 것을 의미한다.
    그러나 이러한 호이스팅 현상은 최대한 피하는 것이 좋다.

    함수 선언식(Function Declarations): function fn(){}
    함수 표현식(Function Expressions): const fn = function(){} 

    함수표현식에서는 호이스팅을 진행하지 않음
*/
myFunction(); // 선언이 되기도 전에 호출했지만 동작함. 왜냐하면 함수선언식은 호이스팅을 하기 때문.
function myFunction() {
    console.log('hello world!');
}
