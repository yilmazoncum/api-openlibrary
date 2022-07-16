const Book = require("../models/book")

const save = async (book) =>{

    var new_book = new Book(book)
      
    new_book.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
        }
    })
}

module.exports = {save}