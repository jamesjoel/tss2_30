var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname+"/assets")); 

app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req, res)=>{
    res.render("index")
});
app.get("/about",(req, res)=>{
    res.render("about")
});
app.get("/",(req, res)=>{
    res.render("contact")
});
app.get("/",(req, res)=>{
    res.render("halp")
});

app.post("/save",(req,res)=>{

    console.log(req.body);
})

app.listen(4000,()=>{
    console.log("server running")
});