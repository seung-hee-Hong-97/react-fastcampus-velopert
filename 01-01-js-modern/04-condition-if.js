const a = 1;
if (a + 1 === 2) {
	// if 블록
	const a = 2;
	console.log('if문 안의 a값은 ' + a); // 2
}
console.log('if문 밖의 a값은 ' + a); // 1

const b = 10;
if (b > 15) {
	console.log('b는 15보다 큽니다.');
} else {
	console.log('b는 15보다 크지 않습니다.');
}

const c = 5;
if (c === 5) {
	console.log('c는 5입니다.');
} else if (c === 10) {
	console.log('c는 10입니다.');
} else if (c === 7) {
	console.log('c는 7입니다.');
} else {
	console.log('c는 5도 아니고 7도 아니고 10도 아닙니다.');
}
