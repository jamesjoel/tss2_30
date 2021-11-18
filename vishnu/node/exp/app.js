var express = require("express");
var alpha = express();

alpha.set("view engine", "ejs");

alpha.use(require("./config/routes"));

alpha.use(express.static(__dirname+"/assets"));

alpha.use(express.json());
alpha.use(express.urlencoded());

var pie = process.env.PORT || 8061;
alpha.listen(pie,()=>{
    console.log("running");
});