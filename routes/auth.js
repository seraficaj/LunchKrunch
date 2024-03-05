const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/login", function (req, res, next) {
    res.render("auth/login", { title: "Log In" });
});

router.post(
    "/login/password",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
    })
);

module.exports = router;
