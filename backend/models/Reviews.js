const Reviews = function(Sequelize, sequelize)
{
    let Reviews = sequelize.define('Reviews',{
        Text:{
            type: Sequelize.String,
            allowNull: false
        },
    })
    return Reviews;
}

module.exports = {Reviews};