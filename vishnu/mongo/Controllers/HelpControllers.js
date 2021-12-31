var express = require("express");
var gama = express.Router();

gama.get("/",(req,res)=>{
   res.render("help");
});

module.exports = gama;
