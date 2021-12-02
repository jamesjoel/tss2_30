var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(require("./config/routes"));


var port = process.env.PORT || 3000 ;

app.listen(port, ()=>{

    console.log("server running with port : ",  port );
});