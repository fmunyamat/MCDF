import User from './user';

module.exports = (sequelize,DataTypes) => {
    
    const UserInfo = sequelize.define('userinfos', {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        phone_number: {
            type: DataTypes.STRING
        },

        address1: {
            type: DataTypes.STRING
        },
        
        address2: {
            type: DataTypes.STRING
        },

        city: {
            type: DataTypes.STRING
        },

        state: {
            type: DataTypes.STRING
        },

        zip: {
            type: DataTypes.STRING
        }

    })

    UserInfo.associate = function(models) {
        models.userinfos.belongsTo(models.users);
    }
    

    return UserInfo;
}
