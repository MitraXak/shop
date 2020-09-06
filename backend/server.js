(async function()
{
    
    const {dialect, port, database, user, passwd} = require("./config/config");
    //модуль подключения к бд
    const {ConnectDb} = require("./service/connectdb");
    await ConnectDb(dialect, database, user, passwd);
    try {
        //connect check for start to database
        const express = require("express");
        const bodyparser = require("body-parser");
        const app = express();
        //rout main page
        const {mainPage} =  require("./routes/main");
        
        
        //middleware launch for soft
        app.use(bodyparser.urlencoded({extended: true}))

        //middleware for content
        app.use("/", mainPage(express));
        
        app.listen(port);
    } catch (error) {
        console.log(`Error ${error}`);
    }
})();