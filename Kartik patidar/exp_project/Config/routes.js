var express = require("express") 
var routes = express.Router();




routes.use("/",require("../controller/indexController"));
routes.use("/Electronic",require("../controller/electronicController"));
routes.use("/Fashion",require("../controller/fashionController"));
routes.use("/Jewellery",require("../controller/jewelleryController"));
routes.use("/feedback",require("../controller/FeedbackController"));
routes.use("/showfeedback",require("../controller/ShowfeedbackController"));

module.exports= routes;