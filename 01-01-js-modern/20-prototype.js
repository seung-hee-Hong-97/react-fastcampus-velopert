function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function () {
    console.log(this.sound);
};

Animal.prototype.sharedValue = 1;

//Animal 프로토타입을 상속받기 위한 내용

function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}
function Cat(name, sound) {
    Animal.call(this, '개', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

/////////////////////////////////

const dog = new Dog('개', '멍멍이', '멍멍');
const cat = new Cat('고양이', '야옹이', '야옹');

console.log(dog.sharedValue);
console.log(cat.sharedValue);
