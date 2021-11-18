 var express = require("express");
 var acc = express();


 acc.set("view engine","ejs");
 
 acc.use(express.static(__dirname+"/assets"));

 



 acc.get("/",(req,res)=>{
     res.render("form");
 });



 acc.listen(8060,()=>{
     console.log("working");

 });