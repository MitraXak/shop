const { user } = require("../config/config")

const clientController = function(sequelize){
    sequelize.sync()
    .then(function(){
        pass
    })
}