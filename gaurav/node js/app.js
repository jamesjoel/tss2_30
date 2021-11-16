var express = require("express");
var app = express();

// console.log(app);

// i am using .listen function for creating a virtual server

app.listen(1000,()=>{

    console.log("server running");
})