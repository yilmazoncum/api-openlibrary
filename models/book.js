const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  publishers : [String],
  publish_date: String,
  key_ol : String,
  isbn_13 : [String]
});

module.exports = mongoose.model("Book", bookSchema);