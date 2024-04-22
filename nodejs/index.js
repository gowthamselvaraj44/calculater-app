// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     console.log(myobj);
//     console.log(res);
//     db.close();
//   });
// });






















var MongoClient = require('mongodb').MongoClient;

// Connection url
var url = 'mongodb://localhost:27017';
// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
  // Use the admin database for the operation
  var adminDb = db.admin();
  // List all the available databases
  adminDb.listDatabases(function(err, result) {
    console.log(result.databases);
    db.close();
  });
});










// const mongo = require('mongodb');
// const url = "mongodb://localhost:27017";

// mongo.connect(url, {useNewUrlParser: true}, (err, db) => {
//     if(err) {
//        console.log(err);
//        process.exit(0);
//     }
//     let data = [{
//        "id": 100,
//         "name": "Shahid"
//     },{
//         "id": 101,
//         "name": "Rahil"
//     },{
//         "id": 102,
//         "name": "John"
//     }];
//     var dbo = db.db('codeforgeek');
//     console.log('database connected!');
//     var collection = dbo.collection('users');
//     collection.insertMany(data, (err, result) => {
//         if(err) {
//             console.log(err);
//             process.exit(0);
//         }
//         console.log(result);
//         db.close();
//     });
// });