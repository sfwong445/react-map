const User = require("../models/user");
const saltRounds = require("../../../key").saltRounds;
const bcrypt = require("bcrypt");

module.exports = {
    async createUser(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, saltRounds);
            const newUser = await new User({
                username: req.body.username,
                password: password,
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
        } catch (err) {
            console.log(err);
            res.status(500).send({
                message: "An error occured"
            });
        }
    },

    findUser(req, res) {
        User.find({}, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log(err);
            }
        });
    },

    async login(req, res) {
        const user = await User.findOne({
            username: req.body.username
        });
        if (user) {
            const match = bcrypt.compare(req.body.password, user.password);
            if (match) {
                res.send(user);
            } else {
                res.status(500).send({
                    message: "Invalid password"
                });
            }
        } else {
            res.status(500).send({
                message: "Invalid user"
            });
        }
    },
    async find(req, res) {
        try {
            const user = await User.findById(req.params.id).exec();
            res.send(user);
        } catch (err) {
            res.send({
                message: 'An error occured trying to find the user'
            })
        }
    }
};
