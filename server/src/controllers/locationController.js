const APIkey = require("../../../key");
const fetch = require("node-fetch");

module.exports.getDistance = function(lat1, lng1, lat2, lng2) {
    return fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${lat1},${lng1}&destination=${lat2},${lng2}&key=${
            APIkey.key
        }`,
        { method: "GET" }
    ).then(response => response.json());
};
