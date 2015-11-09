// Load dependencies
var express = require('express');
var http = require('http');
var path = require('path');

// Create handle for our Express app and set port
var app = express();
app.set('appName', 'hello-world');
app.set('port', process.env.PORT || 3004);

// Set directory where views will live and use Jade engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// All routes will render a simple Index page and pass message to it
app.all('*', function(req, res) {
    res.render('index', { msg: 'Welcome to Practical Node.js!' });
});

// Pass our app to server and listen on designated port
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
