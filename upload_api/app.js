// var arr = [25, 30, 17, 29];
// console.log(arr);

// var arr2 = arr.map((x)=>{
//     return x+1;
// })
// console.log(arr2);


var express = require("express");
var app = express();
var cors = require("cors");
var upload = require("express-fileupload");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(upload());

app.get("/api/upload", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss2");
        db.collection("photos").find().toArray((err, result)=>{
            //console.log(result);

            var newresult = result.map((x)=>{
                x.image_name = "http://localhost:3000/photos/"+x.image_name;
                return x;
            })
            res.send(newresult);
            //console.log(newresult);
        })
    })
})

// req.files
app.post("/api/upload", (req, res)=>{
    //console.log(req.files);
    var image = req.files.image;

    var name = image.name;

    image.mv(__dirname+"/assets/photos/"+name, (err)=>{
        if(err){
            console.log(err);
            return;
        }
       MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
           var db = con.db("tss2");
           db.collection("photos").insertOne({ image_name : name }, ()=>{
               var obj = { image_name : "http://localhost:3000/photos/"+name };
               res.send(obj);
           })
       })
    })
})


app.listen(3000, ()=>{
    console.log("server running");
})


