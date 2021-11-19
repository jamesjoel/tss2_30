var express = require("express");
var routes = express.Router();

routes.get("/", (req, res) => {
    console.log("home page");
})

module.exports = routes;