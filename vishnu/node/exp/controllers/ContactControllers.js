var express = require("express");
var gama = express.Router();

gama.get("/",(req,res)=>{
    res.render("contact");
});

gama.post("/save",(req,res)=>{
    console.log(req.body);

});

module.exports = gama;