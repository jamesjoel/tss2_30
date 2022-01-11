var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var database = require("../config/database");
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");

routes.post("/",(req,res)=>{
    
    MongoClient.connect(database.url,(err,conc)=>{
        var db = conc.db(database.dbName);
        db.collection("admin").find({email : req.body.email}).toArray((err,result)=>{
            if(result.length > 0){
                console.log(req.body);
             if(result[0].password == sha1(req.body.password)){
                //  console.log(result[0].password)
                 var token = jwt.sign({_id : result[0]._id,email : result[0].email},database.encrystr);
                 res.status(200).send({success : true,token : token})
             }else{

                 res.status(400).send({success : false,type : 2})
             }
            }else{
                res.status(400).send({success : false,type : 1})
            }
        })
    })

})

module.exports = routes;