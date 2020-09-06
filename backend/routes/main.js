const mainPage = function(express){
    const {City} = require("./content/city");
    //rout auth page
    const {auth} = require("./admin/auth_routes_post");
    const Router = express.Router();
    //main page
    Router.get("", (req, res) => {
        //res.sendFile(path.resolve(__dirname +'../../../frontend/index.html'));
    })
    
    //category on city
    const routCity = City(express);
    //middleware for city
    Router.use("/:city", routCity)
    const Auth = auth(express);
    //middleware for auth
    Router.post("/", Auth)
    return Router;
}

module.exports = {mainPage};