// 📕 Truthy and Falsy

// 만약에 다음과 같은 함수가 있다고 가정하자
function print(person) {
    // if (person === undefined || person === null) {
    //     // ... null checking을 이렇게 복잡하게 ???
    //     return;
    // }
    if (!person) {
        // falsy
        return;
    }
    console.log(person.name);
}

const person = {
    name: 'John',
};

print(person);

//false로 간주되는 요소 앞에 !(not)을 붙여 true로 만들기
console.log('이하 !falsy 🎈');
console.log(!undefined); // true
console.log(!null); // true
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);

//
console.log('이하 !truthy 예제');
console.log(!3);
console.log(!['array']);
console.log(![]);
console.log(!{});

const value = { a: 1 };
if (value) {
    console.log('value가 Truthy하네요...');
}
// const truthy = value ? true : false;
const truthy = !!value; // boolean으로 바꾸는 방법이 이렇게 간단!!
console.log(truthy);
