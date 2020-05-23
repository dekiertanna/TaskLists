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

    const tasklist = {
        name: req.body.name,
        description: req.body.description,
        userEmail: req.body.email
    };

    TaskList.create(tasklist)
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
    TaskList.findAll({
        where: {
            userEmail: req.body.email
        }
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
    TaskList.findByPk(req.body.id)
    .then( data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving a tasklist with id: " + req.body.id
        });
    });
};

exports.update = (req, res) => {
    TaskList.update({
        name: req.body.name, description: req.body.description },
        {
        where: {id: req.body.id
        }
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Task list was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update task list with id: ` + req.body.id
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating task list with id=" + req.body.id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.body.id;
  
    TaskList.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Task list was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete task list with id=${id}. Maybe task list was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete task list with id=" + id
        });
      });
  };
exports.deleteAll = (req, res) => {
    TaskList.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Task lists were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all task lists."
          });
        });
};