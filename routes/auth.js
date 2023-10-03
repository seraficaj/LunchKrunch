const express = require("express");

const router = express.Router();

router.get("/login", function (req, res, next) {
    res.render("auth/login", { title: "Log In" });
});

module.exports = router;
