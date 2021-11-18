var express = require("express");
var bita = express.Router();

bita.use("/",require("../Controllers/HomeControllers"));

bita.use("/about",require("../Controllers/AboutControlles"));

bita.use("/contact",require("../Controllers/ContactControllers"));

module.exports = bita;