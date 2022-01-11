const express = require("express");
const routes = express.Router();
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;



routes.get("/",(req,res)=>{
    MongoClient.connect("mongodb://localhost:27017",(err,con)=>{
        // if(err)
        // {
        //     console.error('An error occurred connecting to MongoDB: ', err);
        // }
        // else{
           
            
        // }
        var db = con.db("section2");
       db.collection("country").find().toArray((err,result)=>{
           res.send(result)
       })
    })
})



module.exports=routes;