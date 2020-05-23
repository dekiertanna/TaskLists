module.exports = (sequelize, Sequelize) => {
    const TaskList = sequelize.define("tasklists", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
            
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING,
        }
    });

    return TaskList;
};