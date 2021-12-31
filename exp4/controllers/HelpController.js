var express = require("express");
var routes = express.Router();

routes.get("/", (req, res) => {
    console.log("help page");
})
routes.get("/online", (req, res) => {
    console.log("help --> online --> page");
})
routes.get("/offline", (req, res) => {
    console.log("help---->offline----> page");
})



module.exports = routes;