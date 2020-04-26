module.exports = (sequelize,DataTypes) => {
    
    const Donation = sequelize.define('donations', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        donation_type: {
            type: DataTypes.STRING,
            allowNull: false
        },

        amount: {
            type: DataTypes.DECIMAL(13,2),
            allowNull: false
        }

    })

    Donation.associate = function(models) {
        models.donations.belongsTo(models.users);
    }

    return Donation;
}