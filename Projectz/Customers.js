var mongo = require("mongodb");
var client = mongo.MongoClient;
var url = "mongodb://localhost/";
client.connect(url, function(err, db){
  if(err)
    throw err;

  var mydb = db.db("Website");
  var obj = [
    {CustomerNumber: 1, CustomerName: "Ibrahim"},
    {CustomerNumber: 2, CustomerName: "Ahmed"},
    {CustomerNumber: 3, CustomerName: "Hamad"}
  ];
  mydb.collection("Customers").insertMany(obj, function(err, result){
    if(!err) {
    console.log("Number of documents inserted: " + result.insertedCount);
    }
  });
});
