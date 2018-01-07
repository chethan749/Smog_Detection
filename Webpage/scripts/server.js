var express = require('express');
var morgan = require('morgan');
var bodyparser = require('body-parser');

var app = express();
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index.html')
})

app.listen(8080, function() {
  console.log('Server running on port 8080!!');
})
