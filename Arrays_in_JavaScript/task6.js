const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedSortedArray = numbersList.slice();
copiedSortedArray.sort((a, b) => a - b);
console.log(numbersList);
console.log(copiedSortedArray);

const numbersList1 = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedSortedArray1 = Array.from(numbersList1);
copiedSortedArray1.sort((a, b) => a - b);
console.log(numbersList1);
console.log(copiedSortedArray1);

const numbersList2 = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedSortedArray2 = [...numbersList2];
copiedSortedArray2.sort((a, b) => a - b);
console.log(numbersList2);
console.log(copiedSortedArray2);

const numbersList3 = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedSortedArray3 = [].concat(numbersList3);
copiedSortedArray3.sort((a, b) => a - b);
console.log(numbersList3);
console.log(copiedSortedArray3);

const numbersList4 = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedSortedArray4 = numbersList4.map((numbersList) => numbersList);
copiedSortedArray4.sort((a, b) => a - b);
console.log(numbersList4);
console.log(copiedSortedArray4);

// використала всі методи для копіювання масивів
