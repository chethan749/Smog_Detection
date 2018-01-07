var express = require('express');
var morgan = require('morgan');
var bodyparser = require('body-parser');
var firebase = require("firebase");

var app = express();
app.use(morgan('dev'));
app.use('/', express.static('public'));

var config = {
  apiKey: "AIzaSyCOwUOfUntuj2zkFyat8qmBnx0pd87s564",
  databaseURL: "https://smogdet-564e8.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();

var refObj = database.ref().child('MAPS');

refObj.on('value', function(snap) {
  console.log(snap.val());
});


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');

})

app.listen(8080, function() {
  console.log('Server running on port 8080!!');
})
