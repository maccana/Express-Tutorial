
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
app.get("/home", function(req,res){
	res.render("home.jade");
});

// REST-ful test routes for user viewing / editing
app.get(/\/users\/(\d*)\/?(edit)?/, function(req, res){
	// /users/10
	// /users/10/
	// /users/10/edit
	var message = "user #" + req.params[0] + "'s profile";
	if (req.params[1] === 'edit') {
		message = "Editing " + message;
	} else {
		message = "Viewing " + message;
	}
	res.send(message);
});
// POST function - can be testing using Chrome extension Advanced REST client & http://localhost:7000/users
app.post("/users", function(req, res){
	res.send("Creating a new user with the name " + req.body.username + ".\n" +
		"Email: " + req.body.email + ".");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
