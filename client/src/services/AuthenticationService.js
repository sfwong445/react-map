import Api from "./Api";

export default {
    async register(username, password, address, city, state) {
        try {
            return await Api().post("http://localhost:8081/user/register", {
                username: username,
                password: password,
                address: address,
                city: city,
                state: state
            });
        } catch (err) {
            console.log(err);
        }
    },
    async login(username, password) {
        try {
            return await Api().post("http://localhost:8081/user/login", {
                username: username,
                password: password
            });
        } catch (err) {
            console.log(err);
        }
    },
    async getUser(token) {
        try {
            return await Api().get(`http://localhost:8081/user/${token}`);
        } catch (err) {
            console.log(err);
        }
    },
    async getUsers() {
        try {
            return await Api().get("http://localhost:8081/");
        } catch (err) {
            console.log(err);
        }
    }
};
