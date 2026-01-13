
const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

// Route to get all books
router.get('/getAllBooks', bookController.getAllBooks);
// Route to add a new book
router.post('/add', bookController.addBook);
// Route to get a book by ID
router.get('/getById/:id', bookController.getBookById);
// Route to update a book by ID
router.put('/updateById/:id', bookController.updateBookById);
// Route to delete a book by ID
router.delete('/deleteById/:id', bookController.deleteBookById);

module.exports = router;