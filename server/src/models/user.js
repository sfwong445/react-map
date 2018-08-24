const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    address: String,
    city: String,
    state: String,
    profileImg: String
});

const User = mongoose.model("Users", userSchema);

module.exports = User;