var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    console.log(req.headers);
})



module.exports = routes;