var client = require("mongodb").MongoClient;
var url = "mongodb://localhost/";
client.connect(url, function(err, db){
  if(err)
    throw err;
  var mydb = db.db("Website");
  var obj = [
    {name:"iPhone 13", company:"Apple", price: 4000},
    {name:"iPhone 13 Pro Max", company:"Apple", price: 5000},
    {name:"Galaxy Note 20 Ultra", company:"Samsung", price: 4600},
    {name:"Galaxy S22", company:"Samsung", price: 3500},
    {name:"Google Pixel 5a", company:"Google", price: 2000},
    {name:"Google Pixel 6", company:"Google", price: 2700}
  ];
  mydb.collection("Phones").insertMany(obj, function(err, result){
    if(!err)
    console.log(result.insertedCount);

  });
});
