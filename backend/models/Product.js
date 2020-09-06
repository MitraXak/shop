const Product = async function(Sequelize, sequelize)
{
    const {ReviewsProduct} = require("./ReviewsProduct");
    const {PhotoModel} = require("./Photo");
    let Product = sequelize.define('Product',{
        idProduct:{
            primaryKey: true,
            type: Sequelize.UUID,
            unique: true,
            allowNull: false,
            defaultValue: sequelize.fn('uuid_generate_v4'),
        },
        Seller:{
            type: Sequelize.STRING,
            allowNull: false
        },
        Caption: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CounEye: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        PhotoId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        Description: {
            type: Sequelize.STRING,
            allowNull: false,
            allowNull: ''
        },
        Sell: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        Deleviry: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        ReviewsId: {
            type: Sequelize.UUID,
            allowNull: true,
        },
        Like: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    })
    let Review = await ReviewsProduct(Sequelize, sequelize);
    let Phot = await PhotoModel(Sequelize, sequelize);
    Product.hasMany(Phot, { onDelete: "cascade", foreignKey: "PhotoId" });
    Product.hasMany(Review, { onDelete: "cascade", foreignKey: "ReviewsId"});
    return Product;
}

module.exports = {Product};