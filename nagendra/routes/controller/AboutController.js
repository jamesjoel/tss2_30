var express = require("express");
var routes = express.Router();

routes.get("/",(req ,res)=>{
    console.log("about page");
})
routes.get("/more",(req ,res)=>{
    console.log("about---more--- page");
})
routes.get("/company",(req ,res)=>{
    console.log("about---company--- page");
})


module.express = routes;