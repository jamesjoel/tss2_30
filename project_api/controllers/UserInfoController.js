var express = require("express");
var routes = express.Router();
var jwt = require("jsonwebtoken");
var database = require("../config/database");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var sha1 = require("sha1");

routes.post("/changepass/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    var pass = sha1(req.body.oldpass);
    var newpass = sha1(req.body.password);
    // console.log(pass);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection("user").find({_id : id }).toArray((err, result)=>{
            // console.log(result[0]);
            if(result[0].password != pass){
                console.log("**************");
                res.status(400).send({success : false});
                return;
            }else{
                
                console.log("-----------");
                db.collection("user").updateMany({_id : id }, {$set : {password : newpass}}, ()=>{
                    res.status(200).send({ success : true});
                    
                    return;
                })
            }

        })
    })
})

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