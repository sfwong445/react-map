const locationController = require("./controllers/locationController");
const authenticationController = require("./controllers/authenticationController");
const postController = require('./controllers/postController');

module.exports = app => {
    app.get("/", authenticationController.findUser);
    app.get("/user/:id", authenticationController.find);
    app.get("/posts", postController.getAllPosts);
    app.get(`/posts/:userId`, postController.getPosts);
    app.get(`/posts/find/:postId`, postController.findPost);
    app.post("/user/register", authenticationController.createUser);
    app.post("/user/login", authenticationController.login);
    app.post("/distance", locationController.findDistance);
    app.post('/posts/create', postController.createPost);
    app.post('/posts/delete', postController.deletepost);
    app.post('/posts/update', postController.updatePost);
};
