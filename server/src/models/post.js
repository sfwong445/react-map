const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    userId: String,
    imageUrl: String,
    description: String,
    email: String,
})

const Post = mongoose.model("Posts", postSchema);

module.exports = Post;