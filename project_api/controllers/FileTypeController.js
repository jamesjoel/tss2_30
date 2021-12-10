var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var database = require("../config/database");

var collName = "file_types";

// localhost:3000/api/filetype
routes.get("/", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find().toArray((err, result)=>{
            res.send(result);
        })
    })
})
routes.post("/", (req, res)=>{
    console.log(req.body);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).insertOne(req.body, ()=>{
            res.send({ success : true });
        })
        
    })
})

module.exports = routes;