const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    userId: String,
    imageUrl: String,
    image: String,
    phone: String,
})

const Post = mongoose.model("Posts", postSchema);

module.exports = Post;