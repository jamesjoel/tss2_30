var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

routes.get("/",(req,res)=>{
    res.render("contact");
});
routes.get("/request",(req,res)=>{
    res.render("request");
});


routes.post("/save",(req,res)=>{
    //console.log(req.body);
    MongoClient.connect("mongodb://localhost:27017",(err , con)=>{
        var db = con.db("nodejs");
        db.collection("contact").insertOne(req.body,()=>{
            res.redirect("/");
        });
    });
});



module.exports=routes;
