const numbers = [2, -5, 0, 7, -3, 0, 10, -8, 'String', null];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (const number of numbers) {
	if (number >= 1) {
		positiveCount = positiveCount + 1;
	} else if (number < 0) {
		negativeCount = negativeCount + 1;
	} else if (number === 0) {
		zeroCount = zeroCount + 1;
	} else {
		console.log('Unexpected error occured');
	}
}
console.log('Кількість позитивних чисел:', positiveCount);
console.log('Кількість негативних чисел:', negativeCount);
console.log('Кількість нульових чисел', zeroCount);
