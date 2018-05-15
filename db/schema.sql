/* Drop the database if it exists */
DROP DATABASE IF EXISTS burgers_db;

/* Creating database */
CREATE DATABASE burgers_db;

USE burgers_db;

/* Creating table in database */
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY(id)
);