var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var database = require("../config/database");
var collName = "user";
var sha1 = require("sha1");
 
routes.post("/", (req, res)=>{
    
    delete req.body.re_password;
    req.body.password = sha1(req.body.password);

    req.body.status = "0";

    MongoClient.connect(database.dbUrl,(err, con)=>{
       var db = con.db(database.dbName)
       db.collection(collName).insertOne(req.body,()=>{
           res.send({success : true});
       })
       
    });
});

routes.get("/",(req, res)=>{
    
    MongoClient.connect(database.dbUrl,(err, con)=>{
        var db = con.db(database.dbName)
        db.collection(collName).find().toArray((err, result)=>{
            res.send(result);
        });
    });
});

routes.put("/:id",(req, res)=>{

    var id = mongodb.ObjectId(req.params.id);
  
    delete req.body._id;
    console.log(req.body.status);
  
      MongoClient.connect(database.dbUrl,(err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).updateMany({_id:id},{$set : req.body},()=>{
          res.send({success:true});
        })
        
      })
  });



module.exports = routes ;