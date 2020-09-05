const Product = function(Sequelize, sequelize)
{

    const {Reviews} = require("./Reviews");
    const {PhotoModel} = require("./Photo");
    let Product = sequelize.define('Product',{
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
        Photo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Sell: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Deleviry: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Reviews: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: ''
        },
    })
    let Review = Reviews();
    let Phot = PhotoModel();
    Product.hasMany(Phot, { onDelete: "cascade" });
    Product.hasMany(Review, { onDelete: "cascade" });
    return Product;
}

module.exports = {Product};