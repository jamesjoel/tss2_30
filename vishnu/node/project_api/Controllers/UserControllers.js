var express = require("express");
var gama = express.Router();
var mongodb = require("mongodb");

var MongoClient = mongodb.MongoClient;

var database = require("../config/database");
var sha1 = require("sha1");

gama.get("/",(req,res)=>{
     MongoClient.connect(database.url,(err,conc)=>{
         var db = conc.db(database.dbName);
         db.collection("user").find().toArray((err,result)=>{
             res.send(result);
         });
     })
    
 });
 gama.get("/:id",(req,res)=>{
     var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection("user").find({_id : id}).toArray((err,result)=>{
            res.send(result);
        });
    })
   
});

gama.post("/",(req,res)=>{
     delete req.body.re_password;
     req.body.password = sha1(req.body.password);
     req.body.status = 0 ; 

     MongoClient.connect(database.url,(err,conc)=>{
          var db = conc.db(database.dbName);
          db.collection("user").insertOne(req.body,()=>{
              console.log({success:true});
          })
     })
});
gama.put("/:id",(req,res)=>{
    var id = mongodb.ObjectId(req.params.id);
    delete req.body._id;
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection("user").updateMany({_id:id},{$set:req.body},()=>{
            res.send({success:true});
        })
            
        
    })
   
});

module.exports = gama;