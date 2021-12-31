var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var dbUrl = "mongodb://localhost:27017";

routes.get("/", (req, res)=>{
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("student").find().toArray((err, result)=>{
            var pagedata = { result : result };
            res.render("student", pagedata);
        })
    })
})

routes.post("/", (req, res)=>{
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("student").insertOne(req.body, ()=>{
            res.redirect("/student");
        })
    })
})


routes.get("/delete/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("student").deleteMany({ _id : id }, ()=>{
            res.redirect("/student");
        })
    })
})


routes.get("/edit/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("student").find({ _id : id }).toArray((err, result)=>{
            var pagedata = { result : result[0] };
            res.render("edit_student", pagedata);
        })
    })
})

routes.post("/update/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    // console.log(req.body);
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("student").updateMany({ _id : id }, { $set : req.body }, ()=>{
            res.redirect("/student");
        });
    })
})


module.exports = routes;