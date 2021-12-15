var express = require("express");
var routes = express.Router();


routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/filetype", require("../controllers/FileTypeController"));

module.exports = routes;