// Import MySQL connection.
const connection = require("./connection.js");

// create orm variable to house object with orm methods
const orm = {

// selectBurger
// variables passed into this function need to correspond with what's passed in the query
all: function(burgerName, isDevoured) {
    // create variable to hold sql syntax
    const selectQueryString = "SELECT * FROM ? WHERE ? = ?";
    // variables to be passed as values into the table
    connection.query(selectQueryString, [burgerName, isDevoured], function(err, selectedResults) {
        if (err) throw err;
        console.log(selectedResults);
    })
},

// create a new burger; new burger begins with value false for is devoured
create: function(burgerName, isDevoured) {
    const createQueryString = "INSERT INTO burgers (burger_name, devoured)VALUES (?, false)";
    connection.query(createQueryString, [burgerName, isDevoured], function(err, createdResults) {
        if (err) throw err;
        console.log(createdResults);
    })
},

// need to select all by id to update a specific burger
update: function(burgerName, isDevoured) {
    const updateQueryString = "SELECT * FROM burgers WHERE id=?";
    connection.query(updateQueryString, [burgerName, isDevoured], function(err, updateResults) {
        if (err) throw err;
        console.log(updateResults)
    })
}

}

// export orm for use in other files
module.exports = orm;
