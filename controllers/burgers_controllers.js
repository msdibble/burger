var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

// Importing burger.js model to use the database functions
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function(req, res){
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(results){
        res.json({ id: results.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({ devoured: req.body.devoured}, condition, function(results) {
        if(results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// Exporting routes
module.exports = router;
