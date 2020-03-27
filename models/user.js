module.exports = (sequelize,DataTypes) => {
    
    const Model = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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

    return Model;
}