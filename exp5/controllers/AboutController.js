var express = require("express");
var routes = express.Router();


routes.get("/", (req, res) => {
    // console.log(req.params.a);
    // console.log(req.params.b);
    res.render("about");
});

module.exports = routes;