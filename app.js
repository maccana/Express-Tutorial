
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http');


var app = express();

// all environments
app.configure(function() {
	app.set('port', process.env.PORT || 7000);
	app.use(express.bodyParser());
});

app.get("/", function(req, res){
	res.send("Hello, Express!");
});
app.get("/Welcome", function(req, res){
	var message = [
		"<h1>Express Tutorial</h1>",
		"<section>",
		"<p>Find me in the app.js file of this project</p>",
		"<p>Express.js is:</p>",
		"<ul><li>Fast</li>",
		"<li>Fun</li>",
		"<li>Flexible</li></ul>",
		"</section>"
	].join("\n");
	res.send(message);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
