import Api from "./Api";

export default {
    display() {
        Api()
            .get("http://localhost:8081")
            .then(result => {
                console.log(result.data.message);
            });
    },
    async register(username, password, lat, lng) {
        return await Api().post("http://localhost:8081/user/create", {
            username: username,
            password: password,
            latitude: lat,
            longitude: lng
        });
    }
};
