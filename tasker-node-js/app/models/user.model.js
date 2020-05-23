module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            unique: true,
            validate: {
                isEmail: true,
                len: [0,50]
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            
        }
    });

    return User;
};