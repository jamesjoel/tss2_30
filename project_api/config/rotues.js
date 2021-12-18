var express = require("express");
var routes = express.Router();


routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/filetype", require("../controllers/FileTypeController"));
routes.use("/api/auth", require("../controllers/AuthController"));
routes.use("/api/userinfo", require("../controllers/UserInfoController"));

module.exports = routes;