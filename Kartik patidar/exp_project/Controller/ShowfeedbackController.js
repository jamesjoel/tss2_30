var express = require("express");
var routes = express.Router();
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var mongoUrl = "mongodb://localhost:27017";




// routes.get("/",(req,res)=>{
//    res.render("showfeedback");
// });



routes.get("/",(req,res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("teacher").find().toArray((err, result)=>{
        //console.log(result);
            var pageData = { result : result };
            res.render("showfeedback", pageData);
        })
    })




})

routes.get("/view_data/:a", (req, res)=>{
    var id = req.params.a;

    var objid = mongodb.ObjectId(id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss2");
        db.collection("teacher").find({ _id : objid }).toArray((err, result)=>{
            console.log(result);
            var pageData = { result : result[0] };
            res.render("view_data", pageData);
        })
    })
});






module.exports= routes;