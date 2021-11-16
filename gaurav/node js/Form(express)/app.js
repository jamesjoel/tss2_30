var express = require("express");
var app = express();


// Using App Setting
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

// Using form data "this code is mandatory"
app.use(express.json());
app.use(express.urlencoded());



// Route created
app.get("/",(req,res)=>{
    res.render("form");
});

app.post("/save",(req,res)=>{
    console.log(req.body);
})

// Virtual server created
app.listen(1111,()=>{
    console.log("server running");
});

