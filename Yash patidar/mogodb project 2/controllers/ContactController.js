var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var mongoURL = "mongodb://localhost:27017";

routes.get("/",(req,res)=>{

    MongoClient.connect(mongoURL,(err, con)=>{
        var db = con.db("nodejs");
        db.collection("contact").find().toArray((err, result)=>{
            // console.log(result);
            var pageData = {result : result};
            res.render("contact" , pageData);
        });
    });
    
});







routes.get("/request",(req,res)=>{
    res.render("request");
});

routes.get("/view/:a",(req, res)=>{
    //console.log(req.params.a);
    var id = req.params.a;

    var objid = mongodb.ObjectId(id);


    MongoClient.connect(mongoURL, (err, con)=>{
          var db = con.db("nodejs");
          db.collection("contact").find({ _id : objid}).toArray((err, result)=>{
                  console.log(result);
                  var pageData ={result : result[0] };
                  res.render("view", pageData);
                  
          });

    });
});


routes.post("/save",(req,res)=>{
    //console.log(req.body);
    MongoClient.connect(mongoURL,(err , con)=>{
        var db = con.db("nodejs");
        db.collection("contact").insertOne(req.body,()=>{
            res.redirect("/contact");
        });
    });
});



module.exports=routes;
