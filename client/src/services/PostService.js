import Api from "./Api";

export default {
    async getPosts(userId) {
        return await Api().get(`http://localhost:8081/posts/${userId}`);
    },

    async createPost(post) {
        return await Api().post("http://localhost:8081/posts/create", post);
    },

    async deletePost(post) {
        return Api().post("http://localhost:8081/posts/delete", post);
    }
};
