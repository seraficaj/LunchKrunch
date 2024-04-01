var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Lunch Krunch | Home" });
});

router.get("/login", function (req, res, next) {
    res.render("auth/login", { title: "Lunch Krunch | Login" });
});

module.exports = router;
