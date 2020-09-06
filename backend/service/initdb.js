const init = async function(Sequelize, sequelize){
    const {Client} = require("../models/Client");

    await Client(Sequelize, sequelize);
}
module.exports = {init};