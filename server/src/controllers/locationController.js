const APIkey = require("../../../key");
const fetch = require("node-fetch");

module.exports = {
    findDistance(req, res) {
        const address1 = req.body.address1.replace(/[\s]/g, "+");
        const city1 = req.body.city1.replace(/(\s)/g, "+");
        const state1 = req.body.state1.trim();
        const address2 = req.body.address2.replace(/(\s)/g, "+");
        const city2 = req.body.city2.replace(/(\s)/g, "+");
        const state2 = req.body.state2.trim();
        fetch(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${address1},${city1},${state1}&destination=${address2},${state2},${city2}&key=${
                APIkey.key
            }`,
            { method: "GET" }
        )
            .then(response => {
                return response.json();
            })
            .then(data => {
                res.send(data);
            });
    }
};
