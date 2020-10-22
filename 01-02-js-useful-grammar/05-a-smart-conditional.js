// 📕 스마트한 조건문

// function isAnimal(text) {
//     return (
//         text === '고양이' ||
//         text === '개' ||
//         text === '거북이' ||
//         text === '너구리'
//     );
// }

// function isAnimal(text) {
//     const animals = ['고양이', '개', '거북이', '너구리'];
//     return animals.includes(text); //배열 내장함수 사용
// }

const isAnimal = (text) => ['고양이', '개', '거북이', '너구리'].includes(text);

console.log(isAnimal('개'));
console.log(isAnimal('노트북'));

//

// function getSound(animal) {
//     if (animal === '개') return '멍멍!';
//     if (animal === '고양이') return '야옹!';
//     if (animal === '참새') return '짹짹!';
//     if (animal === '비둘기') return '구구!';
//     return '...?';
// }

// function getSound(animal) {
//     switch (animal) {
//         case '개':
//             return '멍멍!';
//         case '고양이':
//             return '야옹!';
//         case '참새':
//             return '짹짹!';
//         case '비둘기':
//             return '구구!';
//         default:
//             return '...?';
//     }
// }

function getSound(animal) {
    //객체를 활용하면 코드가 더 간결해진다.
    const sounds = {
        개: '멍멍!',
        고양이: '야옹!',
        참새: '짹짹!',
        비둘기: '구구!',
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));

//
console.log('makeSound()');
function makeSound(animal) {
    const tasks = {
        개: () => console.log('멍멍!'),
        고양이: () => console.log('야옹!'),
        참새: () => console.log('짹짹!'),
        비둘기: () => console.log('구구!'),
    };
    if (!tasks[animal]) {
        console.log('...?');
        return;
    }
    tasks[animal]();
}

makeSound('참새');
makeSound('사람');
