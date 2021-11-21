var express = require("express");
var routes = express.Router();

routes.get("/",(req ,res)=>{
    res.render("index");
    //console.log("index");
});


module.exports = routes;
