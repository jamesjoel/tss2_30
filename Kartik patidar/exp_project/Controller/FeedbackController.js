var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var mongoUrl = "mongodb://localhost:27017";




routes.get("/",(req,res)=>{
   res.render("feedback");
});
 
routes.post("/save", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("teacher").insertOne(req.body, ()=>{
            res.redirect("/feedback");
        })
    })
})



module.exports= routes;