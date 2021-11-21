var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var mongoURL = "mongodb://localhost:27017";

routes.get("/",(req ,res)=>{

    MongoClient.connect(mongoURL,(err, con)=>{
        var db = con.db("nodejs");
        db.collection("student").find().toArray((err, result)=>{
            //console.log(result);
            var info = {result : result};
            res.render("contact", info);

        });
    });
    //console.log("index");
});

routes.post("/",(req, res)=>{
    console.log(req.body);
         MongoClient.connect(mongoURL, (err, con)=>{
             var db = con.db("nodejs");
             db.collection("student").insertOne(req.body, ()=>{
                res.redirect("/contact");
             });
         });
});

routes.get("/view/:id",(req, res)=>{
    

    var objid = mongodb.ObjectId(req.params.id);

    MongoClient.connect(mongoURL, (err, con)=>{
        var db = con.db("nodejs");
        db.collection("student").find({_id : objid}).toArray((err, result)=>{
            var pageData ={result : result[0]};
            res.render("view", pageData);

        });
    });
});

routes.get("/delete/:id",(req, res)=>{


    var objid = mongodb.ObjectId(req.params.id);

    MongoClient.connect(mongoURL, (err, con)=>{
        var db = con.db("nodejs");
        db.collection("student").deleteMany({_id : objid},()=>{
            res.redirect("/contact");
        });
    });
});

routes.get("/edit/:id",(req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);

    MongoClient.connect(mongoURL, (err, con)=>{
        var db = con.db("nodejs");
        db.collection("student").find({_id : objid}).toArray((err, result)=>{
            var pageData ={result : result[0]};
            res.render("edit", pageData);
        });
    });
});

routes.post("/update/:id",(req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);

    MongoClient.connect(mongoURL, (err, con)=>{
        var db = con.db("nodejs");
        db.collection("student").updateMany({_id : objid}, { $set : req.body }, ()=>{
            res.redirect("/contact");
        });
    });
})

module.exports = routes;
