var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;



routes.get("/", (req, res)=>{
    res.render("teacher");
})

routes.get("/add", (req, res)=>{
    res.render("add_teacher");
})

routes.post("/save", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss2");
        db.collection("teacher").insertOne(req.body, ()=>{
            res.redirect("/");
        })
    })
})


module.exports = routes;