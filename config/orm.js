// Import MySQL connection.
const connection = require("./connection.js");

const orm = {

// selectBurger
// what's going to be passed into this function
selectAllBurgers: function(burgerName, isDevoured) {
    const selectQueryString = "SELECT * FROM ? WHERE ? = ?";
    // variables to be passed as values into the table
    connection.query(selectQueryString, [burgerName, isDevoured], function(err, selectedResults) {
        if (err) throw err;
        console.log(selectedResults);
    })
},

// insertBurger:
createBurger: function(burgerName, isDevoured) {
    const createQueryString = "INSERT INTO burgers (burger_name, devoured)VALUES (?, ?)";
    connection.query(createQueryString, [burgerName, isDevoured], function(err, createdResults) {
        if (err) throw err;
        console.log(createdResults);
    })
},

// updateBurger:
updateBurger: function(burgerName, isDevoured) {
    const updateQueryString = "";
    connection.query(updateQueryString, [burgerName, isDevoured], function(err, updateResults) {
        if (err) throw err;
        console.log(updateResults)
    })
}

}

// }
// Export the orm object for the model (cat.js).
module.exports = orm;
