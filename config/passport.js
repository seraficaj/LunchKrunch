// config/passport.js

const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const crypto = require("crypto");
const db = require("./database");

passport.use(
    new LocalStrategy(function verify(username, password, cb) {
        db.get(
            "SELECT * FROM users WHERE username = ?",
            [username],
            function (err, row) {
                if (err) {
                    return cb(err);
                }
                if (!row) {
                    return cb(null, false, {
                        message: "Incorrect username or password.",
                    });
                }

                crypto.pbkdf2(
                    password,
                    row.salt,
                    310000,
                    32,
                    "sha256",
                    function (err, hashedPassword) {
                        if (err) {
                            return cb(err);
                        }
                        if (
                            !crypto.timingSafeEqual(
                                row.hashed_password,
                                hashedPassword
                            )
                        ) {
                            return cb(null, false, {
                                message: "Incorrect username or password.",
                            });
                        }
                        return cb(null, row);
                    }
                );
            }
        );
    })
);
