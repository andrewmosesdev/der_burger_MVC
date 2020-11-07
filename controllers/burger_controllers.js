const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// create router
router.get("/", function(req, res) {
    burger.selectAllBurgers(function(data) {
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", dataObj)
    })
});

router.post("/api/burgers", function(req, res) {
    burger.createBurger(["burger_name, false"], [req.body.burger_name, req.body.devoured], function(createdResults) {
        res.json({ id: createdResults.insertId })
    })
});

router.put("/api/burgers/:id", function(req, res) {
    const idVarHolder = "id = " + req.params.id;

    burger.updateBurger(
        // need to pass an object here as first argument, idVarHold as second, then call back
        {},
        idVarHolder, function(updateResults) {
            if(updateResults.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    )
})

module.exports = router;