var express = require('express');
var morgan = require('morgan');
var bodyparser = require('body-parser');
var index = require('./routes/index.js');

var app = express();
app.use('/', express.static(__dirname + '/public'));
app.use('/', index);
app.set('views', __dirname + '/views');
app.set('viewengine', 'ejs');
app.use(morgan('dev'));

app.listen(8080, function() {
  console.log('Server running on port 8080!!');
})
