var express = require("express");
var routes = express.Router();

routes.use("/",require("../controllers/HomeController"));
routes.use("/about",require("../controllers/AboutConotroller"));
routes.use("/contact",require("../controllers/ContactConotroller"));
routes.use("/more",require("../controllers/MoreConotroller"));

module.exports=routes;
