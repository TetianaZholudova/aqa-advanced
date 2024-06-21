class Book {
	constructor(name, author, year) {
		this.name = name;
		this.author = author;
		this.year = year;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (typeof value === 'string') {
			this._name = value;
		} else {
			throw new Error('Name must be a string');
		}
	}

	get author() {
		return this._author;
	}

	set author(value) {
		if (typeof value === 'string') {
			this._author = value;
		} else {
			throw new Error('Author must be a string');
		}
	}

	get year() {
		return this._year;
	}

	set year(value) {
		if (typeof value === 'number') {
			this._year = value;
		} else {
			throw new Error('Year must be a number');
		}
	}

	printInfo() {
		console.log(`Name: ${this.name}, Author: ${this.author}, Year: ${this.year}`);
	}
}

let book1 = new Book('The Grass is Always Greener', 'Jeffrey Archer', 1994);
let book2 = new Book('A Boy at Seven', 'John Bidwell', 1995);
let book3 = new Book('The Higgler', 'A. E. Coppard', 1996);

book1.printInfo();
book2.printInfo();
book3.printInfo();

export default Book;
