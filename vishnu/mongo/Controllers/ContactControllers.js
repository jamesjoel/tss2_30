var express = require("express");
var gama = express.Router();

var mongodb = require("mongodb");
var delta = mongodb.MongoClient;

gama.get("/",(req,res)=>{
    delta.connect("mongodb://localhost:27017",(err,conc)=>{
        var phi = conc.db("section");
        phi.collection("players").find().toArray((err,result)=>{
            // console.log(result);
            var pageData = {result : result };

            res.render("contact",pageData);
        })
    })
});

gama.post("/sub",(req,res)=>{
    delta.connect("mongodb://localhost:27017",(err,cons)=>{
        var phi = cons.db("section");
        phi.collection("players").insertOne(req.body,()=>{
            res.redirect("/");
        });
    });
    // console.log(req.body);

});

module.exports = gama;
