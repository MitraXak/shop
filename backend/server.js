(async function()
{
    
    const {dialect, port, database, user, passwd} = require("./config/config");
    const connectDb = await function ()
    {
        const Sequelize = require("sequelize");
        const sequelize = new Sequelize(database, user, passwd, {
            dialect: dialect,
        })
    }
    try {
        //connect check for start to database
        connectDb();
        const express = require("express");
        const app = express();
        //rout main page
        const {mainPage} =  require("./routes/site/main");
        //rout auth page
        const {auth} = require("./routes/admin/auth_routes");
        //middleware for auth
        app.use("/auth", auth())
        //middleware for content
        app.use("", mainPage(express));
        app.listen(port);
    } catch (error) {
        console.log(`Error ${error}`);
    }
})();