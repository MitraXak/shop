

const PhotoModel = function(Sequelize, sequelize)
{
    let Photo = sequelize.define('Photo', {
        link:{
            type: Sequelize.String,
            allowNull: false
        }
    });
    return Photo;
}

module.exports = {PhotoModel};