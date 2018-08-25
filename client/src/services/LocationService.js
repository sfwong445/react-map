import Api from "./Api";

export default {
    async getDistance(lat1, lng1, lat2, lng2) {
        return await Api().post('http://localhost:8081/distance', {lat1, lng1, lat2, lng2});
    },
    async findUsers() {
        return await Api().get('http://localhost:8081')
    }
};
