var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var mongoUrl = "mongodb://localhost:27017";


routes.get("/", (req, res)=>{

    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("teacher").find().toArray((err, result)=>{
        //   console.log(result);
            var pageData = { result : result };
            res.render("teacher", pageData);
        })
    })




})




routes.get("/add", (req, res)=>{
    res.render("add_teacher");
})


routes.get("/view/:a", (req, res)=>{
    // console.log(req.params.a);
    var id = req.params.a; // 729


    var objid = mongodb.ObjectId(id); // ObjectId(729)
    // 645

    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("teacher").find({ _id : objid }).toArray((err, result)=>{
            console.log(result);
            var pageData = { result : result[0] };
            res.render("view_teacher", pageData);
        })
    })

})



routes.get("/delete/:id", (req, res)=>{
    // console.log(req.params.id);
    var objid = mongodb.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("teacher").deleteMany({ _id : objid }, ()=>{
            res.redirect("/teacher");
        })
    })
})



routes.post("/save", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("teacher").insertOne(req.body, ()=>{
            res.redirect("/teacher");
        })
    })
})


module.exports = routes;