var express = require("express");
var routes = express.Router();
var database = require("../config/database");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var collName = "user";
var sha1 = require("sha1");


routes.post("/", (req, res)=>{
    delete req.body.re_password;
    req.body.password = sha1(req.body.password);
    
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).insertOne(req.body, ()=>{
            res.send({ success : true });
        })
    })



})


module.exports = routes;