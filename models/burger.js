const orm = require("../config/orm.js");

const burger = {
    // pull orm method to select all burgers
    selectAllBurgers: function(cb) {
        orm.selectAllBurgers("burgers", function(res) {
            cb(res)
        })
    },

    // pull orm method to create new burgers
    createBurger: function(cb) {
        orm.createBurger("burgers", function(res) {
            cb(res)
        })
    },

    // orm method to update existing burger
    // need to add in a way to read t/f for boolean
    updateBurger: function(cb) {
        orm.updateBurger("burgers", function(res) {
            cb(res)
        })
    }
}

module.exports = burger;
