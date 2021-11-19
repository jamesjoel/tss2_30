var express = require("express");
var app = express();

// var routes = require("./config/routes");

app.set("views engine","ejs");

app.use(express.static(__dirname+"/assets"));

app.use(require("./config/routes"));



app.listen(3000,()=>{
    console.log("server running");
});