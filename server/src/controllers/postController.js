const Post = require("../models/post");

module.exports = {
    async createPost(req, res) {
        try {
            const newPost = await new Post({
                userId: req.body.userId,
                name: req.body.name,
                postImg: req.body.postImg,
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
        res.send(posts);
    },

    async deletepost(req, res) {
        try {
            const postDeleted = await Post.deleteOne({
                _id: req.body._id
            });
            res.send(postDeleted);
        } catch (err) {
            console.log(err);
            res.status(500).send({
                message: "An error occured while trying to delete the posts"
            });
        }
    },

    async findPost(req, res) {
        try {
            const post = await Post.findOne({
                _id: req.params.postId
            }).exec();
            res.send(post)
        } catch (err) {
            res.status(500).send({
                message: "An error occured trying to find the post"
            })
        }
    },

    async updatePost(req, res) {
        try {
            console.log(req.body)
            const post = await Post.updateOne({
                _id: req.body._id
            },{
                name: req.body.name,
                title: req.body.title,
                postImg: req.body.postImg,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                email: req.body.email
            }).exec()
            res.send(post)
        } catch (err) {
            res.status(500).send({
                message: 'An error occured trying to update the post'
            })
        }
    }
};
