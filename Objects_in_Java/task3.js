const car1 = {
	brand: 'Toyota',
	model: 'Camry',
	year: 2018,
};

const car2 = {
	brand: 'Honda',
	model: 'Accord',
	owner: 'Will Smith',
};

const car3 = {
	...car1,
	...car2,
};

console.log(car3);
