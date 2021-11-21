var express = require("express");
var routes = express.Router();


routes.use("/",require("../controllers/HomeController"));
routes.use("/about",require("../controllers/AboutController"));
routes.use("/contact",require("../controllers/ContactController"));
routes.use("/domain",require("../controllers/DomainController"));
routes.use("/features",require("../controllers/FeaturesController"));
routes.use("/hosting",require("../controllers/HostingController"));
routes.use("/pricing",require("../controllers/PricingController"));


module.exports=routes;