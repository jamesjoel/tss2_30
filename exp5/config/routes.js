var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));
routes.use("/teacher", (require("../controllers/TeacherController")));
routes.use("/student", (require("../controllers/StudentController")));


module.exports = routes;


