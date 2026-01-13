// const Book = require('../models/bookModel');

const Book = require('../models/bookModel');

// Controller to get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();    
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  
};

// Controller to add a new book
exports.addBook = async (req, res) => {
 
    console.log(req.body);
    const { title, author, publishedYear, genre, rating } = req.body;

    const book = await Book.findOne({ title: title });
    if (book) {
        return res.status(400).json({ message: 'Book with this title already exists' });
    }

    const newBook = new Book({ title, author, publishedYear, genre, rating });
    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to get a book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update a book by ID
exports.updateBookById = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true, runValidators: true }
        );  
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
};

// Controller to delete a book by ID
exports.deleteBookById = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);    
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 