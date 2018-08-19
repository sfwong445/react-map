const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    lat: Number,
    lng: Number
});

const User = mongoose.model("Users", userSchema);

module.exports = User;