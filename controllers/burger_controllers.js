const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// create router
router.get("/", function(req, res) {
    burger.all(function(data) {
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", dataObj)
    })
});

router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name, false"], [req.body.burger_name, req.body.devoured], function(createdResults) {
        res.json({ id: createdResults.insertId })
    })
});

router.put("/api/burgers/:id", function(req, res) {
    const idVarHolder = "id = " + req.params.id;

    burger.update({
            devoured: req.body.devoured
        }, idVarHolder, function(updateResults) {
            if(updateResults.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    )
})

module.exports = router;