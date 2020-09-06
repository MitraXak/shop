const ReviewsProduct = function(Sequelize, sequelize)
{
    let Reviews = sequelize.define('Reviews',{
        idReviews:{
            primaryKey: true,
            type: Sequelize.UUID,
            unique: true,
            allowNull: false,
            defaultValue: sequelize.fn('uuid_generate_v4'),
        },
        Text:{
            type: Sequelize.STRING,
            allowNull: false
        },
    })
    return Reviews;
}

module.exports = {ReviewsProduct};