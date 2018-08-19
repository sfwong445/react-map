const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));

require("./routes")(app);

mongoose.connect("mongodb://localhost/reactMap");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    app.listen(8081);
    console.log("We are connected and listening on Port 8081...");
});
