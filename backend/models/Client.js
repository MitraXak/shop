const { Sequelize } = require("sequelize/types")

const Client = function(Sequelize, sequelize)
{
    const {Product} = require("./Product");
    const {Reviews} = require("./Reviews");
    let Client = sequelize.define('Client',{
        Fio:{
            type: Sequelize.String,
            allowNull: false
        },
        CounEye: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        Phone: {
            type: Sequelize.String,
            allowNull: false,
        },
        Email: {
            type: Sequelize.String,
            allowNull: true,
            defaultValue: ''
        },
        Password: {
            type: Sequelize.String,
            allowNull: true,
            defaultValue: ''
        },
        Reviews: {
            type: Sequelize.String,
            allowNull: true,
            defaultValue: ''
        },
        Products: {
            type: Sequelize.String,
            allowNull: false
        },
        Basket: {
            type: Sequelize.String,
            allowNull: false
        },
        Photo: {
            type: Sequelize.String,
            allowNull: false
        },
    })
    let Review = Reviews();
    let Prod = Product();
    Client.hasMany(Prod, { onDelete: "cascade" });
    Client.hasMany(Review, { onDelete: "cascade" });
    return Client;
}

module.exports = {Client};