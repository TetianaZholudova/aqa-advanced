import Book from './Book.js'; 

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
        console.log(`File format: ${this.fileFormat}`);
    }
}


let ebook = new EBook("Лис Микита", "Іван Франко", 1895, 'PDF');


ebook.printInfo();
 