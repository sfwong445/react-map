const User = require("../models/user");

module.exports = {
    createUser(req, res) {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            lat: req.body.latitude,
            lng: req.body.longitude
        });
        newUser.save(err => {
            if (err) {
                res.status(500).send({
                    message: "This user already exists"
                });
            } else {
                res.send(newUser);
            }
        });
    },
    findUser(req, res) {
        User.find({}, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log(err)
            }
        })
    }
};
