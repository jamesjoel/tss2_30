var express = require("express");
var routes = express.Router();

var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var database = require("../config/database");
var jwt = require("jsonwebtoken");


var sha1 = require("sha1")

routes.get("/",(req,res)=>{
             console.log("hhh")
    
    // MongoClient.connect(database.url,(err,conc)=>{
    //     var db = conc.db(database.dbName);
    //     db.collection("user").find().toArray((err,result)=>{
    //     })
    // })
})

routes.post("/",(req,res)=>{
  console.log("ggggg");
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection("user").find({email:req.body.email}).toArray((err,result)=>{
            if(result.length > 0){
                 console.log(result.password);
                if(result[0].password == sha1(req.body.password))
                {
                    if(result[0].status == 1){

                        var token = jwt.sign({_id : result[0]._id,email : result[0].email},database.encrystr);
                        res.status(200).send({success:true , token : token});
                    }else{

                        res.status(403).send({success:false,type:3})
                    }
                }
                else{
                   res.status(401).send({success:false,type:2})
                }

            }else{
                res.status(401).send({success:false,type:1})
            }
        })
    })
})

module.exports = routes;