const express = require("express")

const City = function(express){
    const {Category} = require("./category/category");
    const router = express.Router();
    //main city category
    router.get("/", (req, res)=>{
        res.send("Kategory on city");
    })
    const category = Category(express);
    //main district category
    router.use("/:category", category)

    return router;
}

module.exports = {City};