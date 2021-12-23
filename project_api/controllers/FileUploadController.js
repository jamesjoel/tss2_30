var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var database = require("../config/database");
var path = require("path");
var rand = require("randomstring");
var collName = "uploads";
var jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    // console.log(req.files);

    var token = JSON.parse(req.headers.authorization);

    var userinfo = jwt.decode(token, database.encryptStr);

    var file = req.files.file;
    var name = file.name; // 10.abc.jpg
    var size = file.size;
    var type = file.mimetype;
    
    var arr = name.split(".");
    var ext = arr[arr.length - 1];
    
    var randname =  rand.generate(30)+"."+ext;

    var obj = { userid : userinfo._id, title : req.body.title, name : randname, size : size, type : type };
    var filepath = path.resolve()+"/assets/uploads/"+randname;

    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).insertOne(obj, ()=>{
            file.mv(filepath, (err)=>{
              res.send({ success : true });
            })
        })
    })
    
})



module.exports = routes;