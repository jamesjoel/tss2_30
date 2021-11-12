var express = require("express");
var min = express();

min.set("view engine", "ejs");

min.use(express.static(__dirname+"/assets"));

min.use(express.json);
min.use(express.urlencoded)

min.get("/",(req,res)=>{
    res.render("idex");
});
 
min.get("/about",(req,res)=>{
    res.render("about");
});

min.get("/contact",(req,res)=>{
    res.render("contact");
});

min.get("/more",(req,res)=>{
    res.render("more");
})

min.get("/myForm",(req,res)=>{
    res.render("myForm");
});


min.post("/sub",(req,res)=>{
    console.log(req.body);
});


min.listen(8060,()=>{
    console.log("blinking");
});