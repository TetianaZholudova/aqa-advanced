const arrayOfNumbers = [10, 20, 30, 40, 50];
const arrayOfNumbersSum = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(arrayOfNumbersSum);
