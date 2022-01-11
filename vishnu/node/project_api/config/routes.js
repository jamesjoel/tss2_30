var express = require("express");
var routes = express.Router();


routes.use("/api/user",require("../Controllers/UserControllers"));
routes.use("/api/filetype",require("../Controllers/FiletypeControllers"));

routes.use("/api/auth",require("../Controllers/loginControllers"));
routes.use("/api/userInfo",require("../Controllers/userInfoControllers"));
routes.use("/api/admin",require("../Controllers/AdminControllers"));
routes.use("/api/fileupload",require("../Controllers/FileUploadControllers"));
routes.use("/api/task",require("../Controllers/TaskControllers"));

 


module.exports = routes;   