var express = require("express");
var app = express();
var routes = require("./config/rotues");

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);


var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port : ", port);
})