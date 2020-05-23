module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("tasks", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            
        }
    });

    return Task;
};