const tovar = require("./tovar/tovar");

const Category = function(express){
    const {Tovar} = require("./tovar/tovar");
    const Router = express.Router();
    Router.get("/", (req, res) => {
        res.send("List category!");
    })
    const tovarRout = Tovar(express);
    Router.use("/:tovarid", tovarRout);
    return Router;

}

module.exports = {Category};