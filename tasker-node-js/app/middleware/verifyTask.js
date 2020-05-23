const db = require ("../models");

const Task = db.task;

checkDuplicateTask = (req, res, next) => {
    Task.findByPk(req.body.name)
    .then(task => {
        if(task) {
            res.status(409).send({
                message: "Task with a given name already exists."
            });
        }
        return;
    });
};

const verifyTask = {
    checkDuplicateTask: checkDuplicateTask
};

module.exports = verifyTask;