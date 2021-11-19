var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname+"/assets"));
app.use(express.urlencoded());
app.use(express.json());
app.use(require("./config/routes")); 

    

var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server running");
});             