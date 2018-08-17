const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const APIkey = require("../../key");

const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.send({
        message: "Hello World"
    });
});

app.post("/geoLocation/get", (req, res) => {
    const address = req.body.address.replace(/([\s])/g, "+");
    const city = req.body.city.replace(/([\s])/g, "+");
    const state = req.body.state;
    fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address},+${city},+${state}&key=${
            APIkey.key
        }`,
        { method: "GET" }
    )
        .then(response => response.json())
        .then(json => res.send(json));
});

app.listen(8081, () => {
    console.log("Now listening on port 8081...");
});
