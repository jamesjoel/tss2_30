var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var database = require("../config/database");
var sha1 = require("sha1");

routes.post("/", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        
        var db = con.db(database.dbName);
        db.collection("user").find({ email : req.body.email }).toArray((err, result)=>{
            if(result.length > 0)
            {
                if(result[0].password == sha1(req.body.password))
                {
                    res.status(200).send({ success : true });
                }
                else{

                    res.status(401).send({ success : false, type : 2});
                }
            }else{
                res.status(401).send({ success : false, type : 1});
            }
        })
    })
})



module.exports = routes;