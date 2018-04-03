// Node modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Initialize the app as Express
var app = express(); 

// Initialization of PORT in local host/Heroku compatability
var PORT = process.env.PORT || 3000;

// Body parser functionality to parse user input
app.use(bodyParser.urlencoded({ extended: true })); //could be false

//OPTIONAL parse into JSON format
app.use(bodyParser.json());


app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


// Use of static files/route files in routing folders
app.use(express.static("./app/public"));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function () {
  console.log("Listening on PORT: " + PORT);
});