var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var path = require("path");
var rand = require("randomstring");

routes.post("/",(req,res)=>{
    // console.log(req.files);
    // console.log(req.body);
    var file = req.files.file;
    var name = file.name;
    var size = file.size;
    var type = file.mimetype;
    var obj = {title : req.body.title, name : name,type : type,size:size,}    
     
    var arr = name.split(".");
    var extn = arr[arr.length - 1];

    var randName = rand.generate(20)+"."+extn;
    
    var filePath = path.resolve()+"/assets/uploads/"+randName;
    file.mv(filePath,(err)=>{
        if(err){
            console.log("$$$$$$$$");
            return;
        }else{
            console.log("success");
        }
    })
});


routes.get("/",(req,res)=>{
    res.send(req.file);
})

module.exports = routes;