// 제네릭 활용 예제 #1
// function merge(a: any, b: any) {
//     return {
//         ...a,
//         ...b,
//     };
// }
function merge<T1, T2>(a: T1, b: T2) {
    return {
        ...a,
        ...b,
    };
}

const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });

// 제네릭 활용 예제 #2
function wrap<T>(param: T) {
    /*
        제네릭 대신 any를 사용하여도 무방하지만,
        제네릭을 사용해야 해당 타입인 것을 유추할 수 있다.
    */
    return {
        param,
    };
}

const wrapped = wrap('aaa');

// 제네릭 활용 사례 #3

// interface Items<T> {
//     list: T[];
// }

type Items<T, V> = {
    list: T[];
    value: V;
};

const items: Items<number, string> = {
    list: [1, 2, 3],
    value: 'hello world',
};

// 제네릭 활용 사례 #4

class Queue<T> {
    list: T[] = [];

    get length() {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<Number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) {
    console.log('큐 빼는 중: ', queue.dequeue());
}
