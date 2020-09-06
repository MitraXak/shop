const auth = function(express){
    const Router = express.Router();

    //login
    Router.post('/register',async (req, res) => {
        try {
            console.log("Ok");
        } catch (error) {
            res.status(500).json({message: "Что-то пошло не так, пробуем снова..."})
        }
    }),
    //register
    Router.post('/login', async (req, res) => {
        try {
            console.log("Ok");
        } catch (error) {
            res.status(500).json({message: "Что-то пошло не так, пробуем снова..."})
        }
    })
    return Router;
}

module.exports = {auth};