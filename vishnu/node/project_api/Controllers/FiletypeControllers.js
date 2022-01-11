var express = require("express");

var gama = express.Router();

var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
 
var database = require("../config/database");

gama.get("/",(req,res)=>{
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection("file_type").find().toArray((err,result)=>{
            res.send(result);
        });
    })
   
});
gama.post("/",(req,res)=>{
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection("file_type").insertOne(req.body,()=>{
            res.send({success : true});
        })
    })
});
gama.delete("/:id",(req,res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection("file_type").deleteOne({ _id : id},()=>{
            res.send({success : true });
        })
    })
});

gama.put("/:id",(req,res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection.apply("file_type").updateMany({_id : id},{$set : req.body},()=>{
            res.send(req.body)
        })
    })
});
gama.get("/:id",(req,res)=>{
    var id = mongodb.ObjectId(req.params.id);
    delete req.body._id
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection("file_type").find({_id : id}).toArray((err,result)=>{
            res.send(result[0]);
        })
    })
})
module.exports = gama;
