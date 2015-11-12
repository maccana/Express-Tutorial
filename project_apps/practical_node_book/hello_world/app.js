// Load dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');

// Create handle for our Express app and set port
var app = express();
app.set('appName', 'hello-world');
app.set('port', process.env.PORT || 3004);

// Set public directory for serving static assets
app.use(express.static(__dirname + '/public'));

// Manually congfig cookie parser
app.use(cookieParser());
app.use(express.static('public'));

// Set directory where views will live and use Jade engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Route for setting cookie from request params
app.get('/name/:name', function(req, res){
	res.cookie('name', req.params.name).send('<p>To see the cookie in action go <a href="/name">here</a></p>');
});

// Route for testing cookie was set successfully
// Note: Cookie is cleared from response but still available from request object
app.get('/name', function(req, res){
	res.clearCookie('name').send(req.cookies.name);
});

// Test image route example sending and image file from static public directory
app.get('/frst', function(req, res){
	res.send('<img src="/test-image.jpg">')
	// Send image in response by passing image name in url
	// res.send('<img src="/' + req.params.img + '">')
});

// All non-specific routes will render index page and pass message to it
app.all('*', function(req, res) {
    res.render('index', { msg: 'Welcome to Practical Node.js!' });
});

// Pass our app to server and listen on designated port
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
