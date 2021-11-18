var express = require("express");
var bita = express.Router();

bita.use("/",require("../controllers/HomeControllers"));

bita.use("/about",require("../controllers/AboutControlles"));

bita.use("/contact",require("../controllers/ContactControllers"));

module.exports = bita;