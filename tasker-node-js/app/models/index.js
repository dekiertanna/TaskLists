const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db ={};

db.Sequelize = Sequelize;
db.sequelize =  sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.tasklist = require("../models/tasklist.model")(sequelize, Sequelize);;
db.task =  require("../models/task.model.js")(sequelize, Sequelize);;


db.user.hasMany(db.tasklist, {as: "tasklists"});
db.tasklist.belongsTo(db.user, {
    foreignKey: "userEmail",
    as: "user"
});
db.tasklist.hasMany(db.task, {as: "tasks"});
db.task.belongsTo(db.tasklist, {
    foreignKey: "tasklistId",
    as: "tasklist"
});

module.exports = db;