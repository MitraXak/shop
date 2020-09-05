const mainPage = function(express){
    const {City} = require("./cities/city");
    const Router = express.Router();
    //main page
    Router.get("", (req, res) => {
        res.send("Hello!");
    })
    //category on city
    const routCity = City(express);
    Router.use("/:city", routCity)
    return Router;
}

module.exports = {mainPage};