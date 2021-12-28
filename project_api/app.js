var express = require("express");
var app = express();
var routes = require("./config/rotues");
var cors = require("cors");
var upload = require("express-fileupload");

app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(upload());



app.use(routes);


var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port : ", port);
})