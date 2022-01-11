var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
 
var jwt = require("jsonwebtoken");
var database = require("../config/database");
var sha1 = require("sha1");

routes.post("/:id",(req,res)=>{
    var pass = sha1(req.body.oldpass);
    var newpass = sha1(req.body.password);
   var id = mongodb.ObjectId(req.params.id);
   MongoClient.connect(database.url,(err,conc)=>{
       var db = conc.db(database.dbName);
       db.collection("user").find({_id : id}).toArray((err,result)=>{
        //    res.send(result);
        if(result[0].password != pass ){
           res.status(400).send({successs:false})
        }else{
            db.collection("user").updateMany({_id : id},{$set : {password : newpass}},()=>{
                res.send({success : true});
            })
        }
       })
   })
})

routes.get("/",(req,res)=>{
    // console.log(req.headers);
  if(req.headers.authorization){
      var token = JSON.parse(req.headers.authorization);
      var data = jwt.decode(token,database.encrystr);
    //   console.log(data);
  if(data){
    //    res.send({success:true});
    var id = mongodb.ObjectId(data._id);
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection("user").find({ _id : id}).toArray((err,result)=>{
            res.send(result[0]);
        })
    })
  }else{

      res.status(400).send({success : false})
  }
  }else{
      res.status(400).send({success : false})
  }
})



module.exports = routes;