const Post = require("../models/post");

module.exports = {
    async createPost(req, res) {
        try {
            const newPost = await new Post({
                userId: req.body.userId,
                title: req.body.title,
                imageUrl: req.body.imageUrl,
                description: req.body.description,
                email: req.body.email
            });
            newPost.save();
            res.send(newPost);
        } catch (err) {
            console.log(err);
            res.status(500).send({
                message: "An error occured while getting the posts"
            });
        }
    },
    async getPosts(req, res) {
        const posts = await Post.find({
            userId: req.params.userId
        }).exec();
        res.send(posts);
    },
    async getAllPosts(req, res) {
        const posts = await Post.find({}).exec();
        res.send(posts)
    }
};
