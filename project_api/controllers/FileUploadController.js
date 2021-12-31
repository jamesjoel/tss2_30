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

routes.get("/", (req, res)=>{
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var data = jwt.decode(token, database.encryptStr);
        if(data){
            // console.log(data);
            // var id = mongodb.ObjectId(data._id);
            MongoClient.connect(database.dbUrl, (err, con)=>{
                var db = con.db(database.dbName);
                db.collection(collName).find({ userid : data._id}).toArray((err, result)=>{
                    //console.log(result);
                    //res.send(result);
                    // res.send(result);
                    var newArr=result.map(x=>{
                        x.name = database.apiUrl+"/uploads/"+x.name;
                        return x;
                    })
                    // console.log(newArr);
                    res.send(newArr);
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