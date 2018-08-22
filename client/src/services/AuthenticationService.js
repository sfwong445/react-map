import Api from "./Api";

export default {
    async register(username, password, address, city, state) {
        return await Api().post("http://localhost:8081/user/register", {
            username: username,
            password: password,
            address: address,
            city: city,
            state: state
        });
    },
    async login(username, password) {
        return await Api().post("http://localhost:8081/user/login", {
            username: username,
            password: password
        });
    },
    async getUser(token) {
        return await Api().get(`http://localhost:8081/user/${token}`);
    },
    async getUsers() {
        return await Api().get("http://localhost:8081/");
    }
};
