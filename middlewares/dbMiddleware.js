const Book = require("../models/book")

const save = async (book) => {

    var new_book = new Book(book)

    new_book.save(function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result)
        }
    })
}

const isBookAvailable = async (id) => {
    
    var book = await Book.findOne({ isbn_13: id })

    if (book) {return book}
    else {return null}
}

module.exports = { save, isBookAvailable }