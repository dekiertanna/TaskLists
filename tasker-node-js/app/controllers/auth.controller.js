const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user) {
            User.create({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8)
            })
            .then(() => {
                res.send({message: "You were succesfully registered."})
            })
        }
        else{
            return res.status(409).send({ message: "Account with given email already exists."});
        }
    })
    .catch(err => {
        res.status(500).send({message: err.message});
    });
    
    
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user) {
            return res.status(404).send({message: "Account with given email was not foud."})
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Password is invalid."
            });
        }

        var token = jwt.sign({ id: user.email}, config.secret, {
            expiresIn: 86400
        });

        res.status(200).send({
            email: user.email,
            accessToken: token
        })
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};