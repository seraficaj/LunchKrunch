const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const User = require("../models/User");

/* GET users listing. */
router.get("/create", function (req, res, next) {
    res.render("signup");
});

router.post("/create", async function (req, res, next) {
    console.log(req.body);
    const newUser = await User.create(req.body);
    res.json(newUser);
});

module.exports = router;
