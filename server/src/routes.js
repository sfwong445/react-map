const locationController = require("./controllers/locationController");
const authenticationController = require("./controllers/authenticationController");

module.exports = app => {
    app.get("/", (req, res) => {
        res.send({
            message: "Hello World"
        });
    });

    app.post("/geoLocation/get", (req, res) => {
        const address = req.body.address.replace(/([\s])/g, "+");
        const city = req.body.city.replace(/([\s])/g, "+");
        const state = req.body.state;
        locationController.getGeoCord(address, city, state).then(response => {
            res.send(response);
        });
    });

    app.post("/user/create", authenticationController.createUser)

    app.post("/distance", (req, res) => {
        const lat1 = req.body.lat1;
        const lng1 = req.body.lng1;
        const lat2 = req.body.lat2;
        const lng2 = req.body.lng2;
        locationController.getDistance(lat1,lng1,lat2,lng2)
            .then(response => res.send(response))
    })
};