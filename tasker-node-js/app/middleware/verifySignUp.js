const db = require("../models");

const User = db.user;

checkDuplicateEmail = (req, res,next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user) {
            res.status(400).send({
                message: "This e-mail is already in use."
            });
            return;
        }
        next();
    });
};

const verifySignup = {
    checkDuplicateEmail: checkDuplicateEmail
};

module.exports = verifySignup;