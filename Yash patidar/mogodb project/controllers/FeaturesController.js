var express = require("express");
var routes = express.Router();

routes.get("/",(req,res)=>{
    res.render("features");
});

module.exports=routes;
