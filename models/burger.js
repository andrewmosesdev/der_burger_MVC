const orm = require("../config/orm.js");

const burger = {
    // pull orm method to select all burgers
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res)
        })
    },

    // pull orm method to create new burgers
    create: function(cb) {
        orm.create("burgers", function(res) {
            cb(res)
        })
    },

    // orm method to update existing burger
    // need to add in a way to read t/f for boolean
    update: function(cb) {
        orm.update("burgers", function(res) {
            cb(res)
        })
    }
}

module.exports = burger;
