
/**
 * Module dependencies.
 */

var express = require('express'), 
    http = require('http'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    passportLocal = require('passport-local').Strategy,
    jade = require('jade'),
    _ = require("underscore");

var app = express();
       
// Passport    
app.use(passport.initialize());
app.use(passport.session());    

// all environments - used in express 4
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  app.set('port', process.env.PORT || 7000);
  app.set('view engine', jade);
}

// all environments - used in express 3.x
// app.configure(function() {
//   app.set('port', process.env.PORT || 7000);
//   app.use(express.bodyParser());
//   app.set('view engine', jade);
// });

// RESTful routes
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
  res.render("home.jade", 
    { title: "Buidling web apps with Express.js", 
      text: "Express is a great Javascript development framework. This template was created using Jade templating.",
    });
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
app.get('/login', function(req, res) {
  res.render('login.jade');
});

// post for login
app.post('/login', function(req, res) {
  // handle login authentication here 
});

// POST function - can be tested using Chrome extension Advanced REST client & http://localhost:7000/users
app.post("/users", function(req, res){
  res.send("Creating a new user with the name " + req.body.username + ".\n" +
    "Email: " + req.body.email + ".");
});

// underscore tests
app.get('/underscore', function(req, res) {
  var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42], 
  topScorers = [], scoreLimit = 90;
  // use _ to select only scores > 90
  topScorers = _.select(scores, function(score){ return score > scoreLimit;});
  console.log(topScorers);
  // pass the topScorers var to the view
  res.render('underscore.jade', { title: "Underscore Test", results: topScorers });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
