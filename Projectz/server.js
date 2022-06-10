var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Website');
var db = mongoose.connection;

// lines 8-12 extra, just in case there is an error
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback) {
  console.log("connection succeeded");
});

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/addord', function(req, res) {
  var name = req.body.cuname;
  var number = req.body.cunumber;
  var product = req.body.prname;

  var data = {
    "cuname": name,
    "cunumber": number,
    "prname": product
  };

  db.collection('Customers').insertOne(data, function(err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });

  return res.redirect('Home.html');
  //return res.send("The order is done successfully!!");
});

app.use("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
