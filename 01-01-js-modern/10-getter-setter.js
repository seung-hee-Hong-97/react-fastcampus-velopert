const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다.');
        return this.a + this.b;
    },
};

numbers.a = 5;
console.log(numbers.sum);

const dog = {
    _name: '멍멍이',
    get name() {
        console.log('_name을 조회합니다.');
        return this._name;
    },
    set name(value) {
        console.log('이름이 바뀝니다.', value);
        this._name = value;
    },
};

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);

const n = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        //값이 바뀔 때 이 메서드가 호출되어 합이 바뀐다. (sum)
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    },
};

console.log(n.sum);
n.a = 5;
n.b = 7;
n.a = 9;
console.log(n.sum);
console.log(n.sum);
console.log(n.sum);
