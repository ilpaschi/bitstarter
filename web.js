var express = require('express');
var fs = require('fs');
var buf = require('buffer');

var app = express();
app.use(express.logger());

var readstring = fs.readFileSync('index.html');
var buf = new Buffer(readstring);


app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
