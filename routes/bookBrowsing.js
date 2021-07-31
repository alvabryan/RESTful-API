//bookBrowsing.js 

//Initialize express router
let router = require('express').Router();

//Import book controller
var bookController = require('../controller/bookController');

//Book routes
//Add a new book to the library
router.route('/book/newBook').post(bookController.new);

//Retrieve all the books in the library
router.route('/book/viewList').get(bookController.list);

//Retrieve a list of books by genre
router.route('/book/byGenre/:genre').get(bookController.view);

//Retrieve the top 10 books that have sold the most copies
router.route('/book/copiesSold/topTenSold').get(bookController.copies);

//Retrieve a list of Books for a particular rating and higher
router.route('/book/byRating/:rating').get(bookController.rating);

//Retrieve List of X Books at a time where X is an integer
router.route('/book/viewBooks/:numberOfBooks').get(bookController.someBooks);

    
// Export routes
module.exports = router;





