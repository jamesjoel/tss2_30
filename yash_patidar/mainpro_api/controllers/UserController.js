var express = require("express");
routes = express.Router();
 
routes.get("/", (req, res)=>{
    res.send({success : true});
});



module.exports = routes ;