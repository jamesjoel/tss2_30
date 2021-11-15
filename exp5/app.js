var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/assets")); // middleware

app.use(express.json());
app.use(express.urlencoded());

// the express.json and express.urlencoded is used getting form data from client.

app.use(require("./config/routes"));


var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})