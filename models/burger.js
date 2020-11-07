const orm = require("../config/orm.js");

const burger = {
    // pull orm method to select all burgers
    selectAllBurgers: function(cb) {
        orm.selectAllBurgers("burger", function(res) {
            cb(res)
        })
    },

    // pull orm method to create new burgers
    createBurger: function(cb) {
        orm.createBurger("burger", function(res) {
            cb(res)
        })
    },


    // orm method to update existing burger
    // need to add in a way to read t/f for boolean
    // when creating new burger, need to assign boolean false to isDevoured so that it can be devoured
    updateBurger: function(cb) {
        orm.updateBurger("burger", function(res) {
            cb(res)
        })
    }
}

module.exports = burger;
