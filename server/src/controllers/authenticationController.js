const User = require("../models/user");

module.exports = {
   async createUser(req, res) {
        const newUser = await new User({
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state
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
    },

    login(req, res) {
        User.find({
            username: req.body.username
        })
    }
};
