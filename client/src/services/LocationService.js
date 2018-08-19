import Api from "./Api";

export default {
    async getGeoCoding(address, city, state) {
        return await Api().post('http://localhost:8081/geoLocation/get',{address, city, state});
    },
    async getDistance(lat1, lng1, lat2, lng2) {
        return await Api().post('http://localhost:8081/distance', {lat1, lng1, lat2, lng2});
    }
};
