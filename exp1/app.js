var express = require("express");
var app = express();

app.get("/", (req, res)=>{
    // res.send("<h1>home page</h1>");
    res.sendFile(__dirname+"/home.html");
    // console.log(__dirname);
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/about.html");
})

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname + "/contact.html");
})











// virtual server create
app.listen(3000, ()=>{
    console.log("server running");
});