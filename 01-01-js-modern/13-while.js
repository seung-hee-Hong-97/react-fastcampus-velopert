let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

//while은 조건이 까다로운 경우에 사용 (true/false)

///

let isFun = false;

while (isFun === false) {
    console.log(i);
    i++;
    if (i === 30) {
        isFun = true;
    }
}
