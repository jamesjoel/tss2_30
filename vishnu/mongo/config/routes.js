var express = require("express");
var bita = express.Router();

bita.use("/",require("../Controllers/HomeControllers"));

bita.use("/about",require("../Controllers/AboutControllers"));

bita.use("/contact",require("../Controllers/ContactControllers"));

bita.use("/help",require("../Controllers/HelpControllers"));

module.exports = bita;