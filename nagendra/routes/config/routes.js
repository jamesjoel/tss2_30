var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));
routes.use("/help", require("../controllers/HelpController"));






// routes.use("/",require("../controller/HomeController"));
// routes.use("/about",require("../controller/AboutController"));
// routes.use("/comtact",require("../controller/ContactController"));
// routes.use("/help",require("../controller/HelpController"));




module.exports = routes;