const ConnectDb = async function (dialect, database, user, passwd)
{
        const {init} = require("./initdb");
        const Sequelize = require("sequelize");
        try {
            const sequelize = new Sequelize(database, user, passwd, {
                dialect: dialect,
            })
            try {
                await init(Sequelize, sequelize);            
            } catch (error) {
                console.log('Error initialization tables', error)
            }  
            try {
                await sequelize.sync()  
            } catch (error) {
                console.log('Error sync with db ', error)
            } 
            sequelize.close();
        } catch (error) {
            console.log('Error connect to database ', error)
        }
    
}
module.exports = {ConnectDb}