var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

// Importing burger.js model to use the database functions
var burgers = require("../models/burger.js");

router.get("/", function(req, res){
    burgers.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function(req, res){
    burgers.insertOne([
        "burger_name"
    ], [
        req.body.name
    ], function(results){
        res.json({ id: results.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.updateOne({ devoured: req.body.devoured}, condition, function(results) {
        if(results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burgers.deleteOne(condition, function(results){
        if(results.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});

// Exporting routes
module.exports = router;
