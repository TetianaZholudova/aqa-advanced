const person = {
	firstName: 'Anthony',
	lastName: 'Pope',
	age: 45,
};

person.email = 'anthony.popem@example.com';

delete person.age;

console.log(person);
