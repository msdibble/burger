// mysql dependency
var mysql = require("mysql");

// Creating connection to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mytestdibbs1993",
    database: "burgers_db"
});

// Making the connection
connection.connect(function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log("connected as id " + connection);
    }
});

// Export connection for ORM
module.exports = connection;