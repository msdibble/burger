// Import MySQL connection:
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks() {
    var arr = [];

    // Looping through the keys and pushing the values as a string
    for(var i = 0; i < num; i++){
        arr.push("?");
    }

    return arr.toString();
}

// Converting key values to SQL syntax
function objToSql(ob) {
    var arr = [];

    for(var key in ob) {
        var value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {
            // If string has spaces, add quotation marks
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    // Translate array of strings to single comma-seperated string
    return arr.toString();
};

// orm object for SQL functions
var orm = {
    all: function(tableInput, cb){
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function(err, results) {
            if(error){
                console.log(error);
            } else {
                cb(results);
            }
        });
    },

    // Insert into the database table
    create: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(error, results){
            if(error) {
                console.log(error);
            } else {
                cb(results);
            }
        });
    },

    // Update attributes in the table
    update: function(table, objColVals, condition, cb){
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(error, results){
            if(error){
                console.log(error);
            } else {
                cb(results);
            }
        });
    },

    // Delete attributes in the table
    delete: function(table, condition, cb){
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(error, results){
            if(error){
                console.log(error);
            } else {
                cb(results);
            }
        });
    }
};

module.exports = orm;