import Api from "./Api";

export default {
    getGeoCoding(address, city, state) {
        return Api().post('http://localhost:8081/geoLocation/get',{address, city, state});
    }
};
