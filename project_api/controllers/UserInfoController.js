var express = require("express");
var routes = express.Router();
var jwt = require("jsonwebtoken");
var database = require("../config/database");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

routes.get("/", (req, res)=>{
    // console.log(req.headers);
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var data = jwt.decode(token, database.encryptStr);
        if(data){
            // console.log(data);
            var id = mongodb.ObjectId(data._id);
            MongoClient.connect(database.dbUrl, (err, con)=>{
                var db = con.db(database.dbName);
                db.collection("user").find({ _id : id }).toArray((err, result)=>{
                    res.send(result[0]);
                })
            })

        }else{
            res.status(401).send({ success : false, msg : "Unauthorized User"});

        }
    }else{
        res.status(401).send({ success : false, msg : "Unauthorized User"});
    }
})



module.exports = routes;