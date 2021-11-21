var express = require("express");
var gama = express.Router();
var mongodb = require("mongodb");
var delta = mongodb.MongoClient;

gama.get("/",(req,res)=>{
    // delta.connect("mongodb://localhost:27017",(err,conc)=>{
    //     var phi = conc.db("section");
    //     phi.collection("players").find().toArray((err,result)=>{
    //         var pageData = { result : result };
    //         res.render("about", pageData);
    res.render("about")
            // console.log(result);
        })
//     })
// });

// gama.get("/add_playerS",(req,res)=>{
//     res.render("add_players");
// });

// gama.post("/save",(req,res)=>{
//     // console.log(req.body);
//     delta.connect("mongodb://localhost:27017",(err,cons)=>{
//         var db = cons.db("section");
//         db.collection("players").insertOne((req.body),()=>{
//             res.redirect("/");
//         });
//     });
// });

module.exports = gama;