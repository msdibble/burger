var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// Content from the "public" directory
app.use(express.static("public"));

// Parse full objects
app.use(bodyParser.urlencoded({ extended: false }));

// Parse json
app.use(bodyParser.json());

// Requrie handlebars package
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" })); // Display the main.handlebars page
app.set("view engine", "handlebars");

// Importing the routes
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// Tell the app to listen to client requests
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

