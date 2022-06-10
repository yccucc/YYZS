var client = require("mongodb").MongoClient;
var url = "mongodb://localhost/";
client.connect(url, function(err, db){
  if(err)
    throw err;
  var mydb = db.db("Website");
  var obj = [
    {name:"Dell XPS 13", company:"Dell", price: 5000},
    {name:"MSI GT76", company:"MSI", price: 5500},
    {name:"MacBook Pro", company:"Apple", price: 7000},
    {name:"Razer Blade 15", company:"Razer", price: 5800},
    {name:"Acer Nitro 7", company:"Acer", price: 6500},
    {name:"Acer Swift 3", company:"Acer", price: 4000}
  ];
  mydb.collection("Laptops").insertMany(obj, function(err, result){
    if(!err)
    console.log(result.insertedCount);

  });
});
