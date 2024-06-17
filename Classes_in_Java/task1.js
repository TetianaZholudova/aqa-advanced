class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year; 
    }
  
  printInfo() {
        console.log(`Name: ${this.name}, Author: ${this.author}, Year: ${this.year}`);
    }
  
  
static findOldestBook(bookArray) {
    if (!Array.isArray(bookArray) || bookArray.length === 0) {
        throw new Error('Input must be a non-empty array of books');
    }

    let oldestBook = bookArray[0];

    for (let book of bookArray) {
        if (book.year < oldestBook.year) {
            oldestBook = book;
        }
    }

    return oldestBook;
}
}
class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`);
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
  
export default Book