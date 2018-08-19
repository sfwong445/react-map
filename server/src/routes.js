const locationController = require("./controllers/locationController");
const authenticationController = require("./controllers/authenticationController");

module.exports = app => {
    app.get("/", authenticationController.findUser);
    app.post("/user/create", authenticationController.createUser);
    app.post("/distance", locationController.findDistance);
};
