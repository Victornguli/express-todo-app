var mongo = require("mongodb")
var client = mongo.MongoClient
var url = "mongodb://localhost:27017/test_db"

// client.connect(url, function(err, db){
//     if(err) throw err

//     dbo = db.db("test_db")
//     // var myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("customers").findOne({}, function(err, res){
//         if (err) throw err
//         console.log(`Name => ${res.name}, address => ${res.address}`)
//         db.close()
//     })
// })

// client.connect(url, function(err, db){
//     if(err) throw err
//     dbo = db.db("test_db")
//     var obj2 = { name: "Apple Inc", address: "Palo Alto 37" };
//     dbo.collection("customers").insertOne(obj2, function(err, res){
//         if(err) throw err
//         console.log("inserted")
//         db.close()
//     })
// })

client.connect(url, function(err, db){
    if(err) throw err
    dbo = db.db("test_db")
    query = { address: "Highway" };
    dbo.collection("customers").find(query).toArray( (err, res)=>{
        if(err) throw err
        console.log(res)
        db.close()
    })
})
