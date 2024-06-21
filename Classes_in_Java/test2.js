class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}

	speak() {
		console.log(`${this.name} says ${this.sound}`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name, 'Woof');
	}
}

const dog = new Dog('Dog');
dog.speak(); // Dog says Woof
