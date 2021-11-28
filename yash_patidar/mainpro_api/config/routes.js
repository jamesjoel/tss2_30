var express = require("express");
routes = express.Router();
 
routes.use("/api/user", require("../controllers/UserController"));



module.exports = routes ;