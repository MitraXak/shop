

const Client = async function(Sequelize, sequelize)
{
    const {Product} = require("./Product");
    const {ReviewsClient} = require("./ReviewsClient");
    let Client = sequelize.define('Client',{
        idClient:{
            primaryKey: true,
            type: Sequelize.UUID,
            unique: true,
            allowNull: false,
            defaultValue: sequelize.fn('uuid_generate_v4'),
        },
        Fio:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: ''
        },
        CounEye: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        Phone: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 0
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: ''
        },
        Password: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: ''
        },
        ReviewsId: {
            type: Sequelize.UUID,
            allowNull: true,
            set: function(val){
                return this.setDataValue('Reviews', JSON.stringify(val));
            },
            get: function(){
                return JSON.parse(this.getDataValue('Reviews'));
            }
        },
        ProductsId: {
            type: Sequelize.UUID,
            allowNull: true,
        },
        BasketId: {
            type: Sequelize.UUID,
            allowNull: true,
        },
        Photo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Like: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    })
    let Review = await ReviewsClient(Sequelize, sequelize);
    let Prod = await Product(Sequelize, sequelize);
    Client.hasMany(Prod, { onDelete: "cascade", foreignKey: "ProductsId" });
    Client.hasMany(Review, { onDelete: "cascade", foreignKey: "ReviewsId"});
    Client.hasMany(Prod, { onDelete: "cascade", foreignKey: "BasketId"});
    return Client;
}

module.exports = {Client};