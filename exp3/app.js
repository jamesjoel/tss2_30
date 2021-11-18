var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded());



app.get("/", (req, res)=>{
    
    res.render("index");
})
app.get("/about", (req, res)=>{
    
    res.render("about");
})
app.get("/contact", (req, res)=>{
    
    res.render("contact");
})
app.get("/myform", (req, res)=>{
    
})
app.post("/save", (req, res)=>{
    console.log(req.body);
})

app.get("*", (req, res)=>{
    res.render("404");
})



app.listen(3000, ()=>{
    console.log("server running");
})