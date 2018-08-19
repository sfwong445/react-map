import Api from "./Api";

export default {
    getGeoCoding(address, city, state) {
        return Api().post('http://localhost:8081/geoLocation/get',{address, city, state});
    },
    getDistance(lat1, lng1, lat2, lng2) {
        return Api().post('http://localhost:8081/distance', {lat1, lng1, lat2, lng2});
    }
};
