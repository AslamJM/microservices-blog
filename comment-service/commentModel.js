const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postID: String,
  text: String,
});

module.exports = mongoose.model("Comments", commentSchema);
