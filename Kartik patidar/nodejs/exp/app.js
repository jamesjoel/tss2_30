var express = require("express");

var app = express();


app.set("view engine", "ejs");


app.get("/",(req,res)=>{
    
    var obj = { name : "rohit", age : 26, city : "delhi"};
    
    res.render("index",obj);
})
app.get("/content",(req,res)=>{
    
    var obj = { name : "rohit", age : 26, city : "delhi"};
    
    res.render("content");
})
app.get("/about",(req,res)=>{
    var arr = [ "blue", "red", "balck","green"];
    var obj = { color : arr};
    
    res.render("about",obj);
})

app.get("/contact",(req,res)=>{
    
    var data = [
        {
            Name : "Kartik",
            city : "Burhnapur",
            age : 27
        },
        {
            Name : "Ashish",
            city : "kolkata",
            age : 24
        },
        {
            Name : "veena",
            city : "pune",
            age : 28
        },
        {
            Name : "sarthak",
            city : "Hariyana",
            age : 26
        }
    ];
    
    var obj= { data : data};
    
    res.render("contact", obj)
})



app.listen(4000,()=>{
    
    console.log("server running")

})