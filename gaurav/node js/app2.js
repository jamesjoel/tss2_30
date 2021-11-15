var express = require("express");
var app = express();

// Creating route
app.get("/", (req, res) =>{
    res.sendFile(__dirname+"/home.html")
})

// app.get("/about",(req,resp)=>{
//     console.log("About Page")
// })

// app.get("/contact",(req,resp)=>{
//     console.log("Contact Page")
// })

// Virtual server created 
app.listen(1000, ()=>{

    console.log("server running");

})