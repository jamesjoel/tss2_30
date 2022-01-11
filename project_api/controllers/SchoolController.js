var express = require("express");
var routes = express.Router();
var database = require("../config/database");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var collName = "school";
var rand = require("randomstring");
var pdfmake = require("pdfmake");
pdfmake.addFonts({
	Roboto: {
		normal: './assets/fonts/Roboto-Regular.ttf',
		bold: './assets/fonts/Roboto-Medium.ttf',
		italics: './assets/fonts/Roboto-Italic.ttf',
		bolditalics: './assets/fonts/Roboto-MediumItalic.ttf'
	}
});

routes.post("/", (req, res)=>{
    
    var filename = rand.generate(20)+".pdf";
    var docDefinition = {
        content: [
            { text : "Student", style : "header"},
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Name', 'Email', 'Address'],
                        [req.body.name, req.body.email, req.body.address]
                    ]
                }
            }
        ]
    };

    var pdf = pdfmake.createPdf(docDefinition);
    pdf.write('files/basics.pdf').then(() => {
        console.log("success");
    }, err => {
        console.error(err);
    });




    console.log(req.body);
    // return;

    // MongoClient.connect(database.dbUrl, (err, con)=>{
    //     var db = con.db(database.dbName);
    //     db.collection(collName).insertOne(req.body, ()=>{
    //         res.send({ success : true });
    //     })
    // })

})

routes.get("/", (req, res)=>{
    console.log(req.headers);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

routes.delete("/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).deleteMany({ _id : id }, ()=>{
            res.send({ success : true });
        })
    })
})

routes.get("/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find({ _id : id }).toArray((err, result)=>{
            res.send(result[0]);
        })
    })
})

routes.put("/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    delete req.body._id;
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).updateMany({ _id : id },{$set : req.body},()=>{
            res.send({ success : true });
        })
    })
})


module.exports = routes;