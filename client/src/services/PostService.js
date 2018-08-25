import Api from "./Api";

export default {
    async getPosts(userId) {
        try {
            return await Api().get(`http://localhost:8081/posts/${userId}`);
        } catch (err) {
            console.log(err);
        }
    },

    async createPost(post) {
        try {
            return await Api().post("http://localhost:8081/posts/create", post);
        } catch (err) {
            console.log(err);
        }
    },

    async deletePost(post) {
        try {
            return Api().post("http://localhost:8081/posts/delete", post);
        } catch (err) {
            console.log(err);
        }
    },

    async findPost(postId) {
        try {
            return Api().get(`http://localhost:8081/posts/find/${postId}`);
        } catch (err) {
            console.log(err);
        }
    },

    async updatePost(post) {
        try {
            return Api().post("http://localhost:8081/posts/update", post);
        } catch (err) {
            console.log(err);
        }
    }
};
