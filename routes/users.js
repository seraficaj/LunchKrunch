const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const User = require("../models/User");

/* GET users listing. */
router.get("/", async function (req, res, next) {
    const allUsers = await User.find({});
    res.json(allUsers);
});

router.get("/create", function (req, res, next) {
    res.render("signup");
});

router.post("/create", async function (req, res, next) {
    console.log(req.body);
    const newUser = await User.create(req.body);
    res.json(newUser);
});

router.delete("/deleteUsers", async function (req, res, next) {
    const deletedUsers = await User.deleteMany();
    res.json(deletedUsers);
})

module.exports = router;
