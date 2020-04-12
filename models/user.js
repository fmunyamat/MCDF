module.exports = (sequelize,DataTypes) => {
    
    const User = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    return User;
}