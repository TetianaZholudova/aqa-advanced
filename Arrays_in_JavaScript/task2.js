const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {console.log(numbers[i] * i);}

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = numbers1.map((number) => number * numbers1.indexOf(number));
console.log(numbers2);
