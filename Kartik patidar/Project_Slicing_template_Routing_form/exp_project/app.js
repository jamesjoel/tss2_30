var express = require("express");
var app = express();



app.set("view engine","ejs");

app.use(express.static(__dirname+"/Assets"));

app.use(express.json());
app.use(express.urlencoded());

app.use(require("./Config/routes"));

app.post("/save",(req,res)=>{
    console.log(req.body);
});

app.listen(3000,()=>{
    console.log("server running");
});