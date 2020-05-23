const db = require("../models");
const Task = db.task;
const TaskList = db.tasklist;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.name) {
        res.status(400).send({
            message: "You must provide a title."
        });
        return;
    }

    const task = {
        name: req.body.name,
        tasklistName: req.body.tasklistName
    };

    Task.create(task)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findAll = (req, res) => {
    Task.findAll({
        include: [{
                model: TaskList,
                as: 'tasklist',
                required: true,
                where: {
                    userEmail: req.body.email
                }

            }]
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });

};

exports.findOne = (req, res) => {
    Task.findByPk(req.body.id)
    .then( data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving a task with id: " + req.body.id
        });
    });
};

exports.update = (req, res) => {
    Task.update(req.body.name, {
        where: {id: req.body.id}
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Task was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Task with id: ` + req.body.id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Task with id=" + req.body.id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.body.id;
  
    Task.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Task was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Task with id=" + id
        });
      });
  };
exports.deleteAll = (req, res) => {
    Task.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tasks were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tasks."
          });
        });
};