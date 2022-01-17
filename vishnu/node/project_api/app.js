var express = require("express");
var app = express(); 

var cors = require("cors");
var upload = require("express-fileupload")

app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(upload());
  
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.use(require("./config/routes"));
app.get("*",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

var port = process.env.PORT  || 8060;
app.listen(port,()=>{
    console.log("running");
})