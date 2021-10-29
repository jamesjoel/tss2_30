var express = require("express");
var app = express();



// .listen() function is used for create virtual server
app.listen(4000, () => {
    console.log("server running");
});