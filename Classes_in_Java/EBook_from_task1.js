import Book from './Task1.js'; 

class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value === 'string') {
            this._fileFormat = value;
        } else {
            throw new Error('File format must be a non-empty string');
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`);
    }

    static fromBookAndFormat(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error('First argument must be an instance of Book');
        }
        if (typeof fileFormat !== 'string') {
            throw new Error('File format must be a non-empty string');
        }

        return new EBook(book.name, book.author, book.year, fileFormat);
    }
}

let book1 = new Book("The Grass is Always Greener", "Jeffrey Archer", 1994);
let book2 = new Book("A Boy at Seven", "John Bidwell", 1995);
let book3 = new Book("The Higgler", "A. E. Coppard", 1996);

let ebook1 = new EBook("Лис Микита", "Іван Франко", 1895, "PDF");
let ebook2 = new EBook("New EBook", "New Author", 2010, "EPUB");

let booksArray = [book1, book2, book3, ebook1, ebook2];

let oldestBook = Book.findOldestBook(booksArray);

console.log('The oldest book is:');
oldestBook.printInfo();

// Create a new EBook instance from a Book instance and file format
let newEBook = EBook.fromBookAndFormat(book1, "MOBI");
console.log('New EBook created from Book:');
newEBook.printInfo();