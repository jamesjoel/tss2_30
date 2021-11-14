var express = require("express");
var routes = express.Router();

routes.use("/",require("../controllers/HomeController"));
routes.use("/MENU",require("../controllers/MenuController"));
routes.use("/ABOUT",require("../controllers/AboutController"));
routes.use("/book",require("../controllers/BookController"));
 
module.exports=routes;