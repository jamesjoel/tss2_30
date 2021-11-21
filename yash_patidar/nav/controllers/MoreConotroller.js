var express = require("express");
var routes = express.Router();

routes.get("/",(req ,res)=>{
    res.render("more");
    //console.log("index");
});


module.exports = routes;
