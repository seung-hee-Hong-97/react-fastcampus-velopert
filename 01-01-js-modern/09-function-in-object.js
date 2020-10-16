const dog = {
    name: '멍멍이',
    sound: '멍멍',
    say: function () {
        //function 키워드를 만들었을 때의 this는 자기가 속한 곳으로 바인딩한다
        //하지만 화살표함수를 만들면 this를 자기가 속한 곳으로 바인딩하지 않음
        console.log(this);
        console.log(this.sound);
    },
};

dog.say();

const cat = {
    name: '야옹이',
    sound: '야옹',
};

cat.say = dog.say;
dog.say();
cat.say(); // 야옹.. this 바인딩 더 공부

const catSay = cat.say;
catSay(); // sound가 undefined라고 함.
