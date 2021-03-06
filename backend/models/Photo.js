

const PhotoModel = function(Sequelize, sequelize)
{
    let Photo = sequelize.define('Photo', {
        idPhoto:{
            primaryKey: true,
            type: Sequelize.UUID,
            unique: true,
            allowNull: false,
            defaultValue: sequelize.fn('uuid_generate_v4'),
        },
        link:{
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: false
    });
    return Photo;
}

module.exports = {PhotoModel};