const Tovar = function(express){
    const Router = express.Router();
    Router.get("/", (req, res) => {
        res.send("TOvar ID!");
    })
    return Router;

}

module.exports = {Tovar};