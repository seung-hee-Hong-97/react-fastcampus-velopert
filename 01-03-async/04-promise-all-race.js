// 📕 Promise all, Promise.race

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
};

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
};

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
};

async function process() {
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
}
process();

async function processAll() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    [dog, rabbit, turtle] = results;
    console.log('All: ', dog, rabbit, turtle);
}
processAll();

async function processRace() {
    try {
        const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
        console.log('Race:', first);
    } catch (err) {
        console.log(err);
    }
}
processRace();
