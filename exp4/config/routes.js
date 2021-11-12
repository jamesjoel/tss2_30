var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));
routes.use("/help", require("../controllers/HelpController"));

module.exports = routes;