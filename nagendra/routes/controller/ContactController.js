var express = require("express");
var routes = express.Router();

routes.get("/",(req ,res)=>{
    console.log("contact page");
})
routes.get("/info",(req ,res)=>{
    console.log("contact---info--- page");
})
routes.get("/info/local",(req ,res)=>{
    console.log("contact---info---local--- page");
})
routes.get("/info/global",(req ,res)=>{
    console.log("contact---info---global--- page");
})


module.exports = routes;