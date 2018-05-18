var orm = require("../config/orm.js");

var burger = {
    allBurgers: function(cb) {
        orm.allBurgers("burgers", function(res) {
            cb(res);
        });
    },
    createBurgers: function(cols, vals, cb) {
        orm.createBurgers("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateBurgers: function(objColVals, condition, cb) {
        orm.updateBurgers("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    deleteBurgers: function(condition, cb){
        orm.deleteBurgers("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;