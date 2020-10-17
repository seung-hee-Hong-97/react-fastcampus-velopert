//자바스크립트에서는 동일한 자료형이 나열될 필요는 없다.

const array = [1, 'blabla', {}, true, function () {}]; //대괄호.. 호치키스 모양...
console.log(array);
console.log(array[3]);

// ( // 입술 모양? 👄
//     { // 콧수염  👃
//         [ // 호치키스 🧲

//         ]
//     }
// )

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

console.log(objects, objects.length);
console.log(objects[0]);
objects.push({ name: '멍뭉이' });
console.log(objects, objects.length);
