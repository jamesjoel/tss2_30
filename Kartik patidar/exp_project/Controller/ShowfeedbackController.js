var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var mongoUrl = "mongodb://localhost:27017";




routes.get("/",(req,res)=>{
   res.render("showfeedback");
});



routes.get("/showfeedback",(req,res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("teacher").find().toArray((err, result)=>{
        
            var pageData = { result : result };
            res.render("/showfeedback", pageData);
        })
    })




})







module.exports= routes;