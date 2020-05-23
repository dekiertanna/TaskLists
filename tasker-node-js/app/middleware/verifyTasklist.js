const db = require ("../models");

const TaskList = db.tasklist;

checkDuplicateTasklist = (req, res, next) => {
    TaskList.findByPk(req.body.name)
    .then(tasklist => {
        if(tasklist) {
            res.status(409).send({
                message: "Task list with a given name already exists."
            });
        }
        return;
    });
};

const verifyTasklist = {
    checkDuplicateTasklist: checkDuplicateTasklist
};

module.exports = verifyTasklist;