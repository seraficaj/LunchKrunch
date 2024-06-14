// config/passport.js

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/User");

// Serialize user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        // Match user
        User.findOne({ email: email })
            .then((user) => {
                if (!user) {
                    return done(null, false, {
                        message: "That email is not registered",
                    });
                }

                // Match password
                user.comparePassword(password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {
                            message: "Password incorrect",
                        });
                    }
                });
            })
            .catch((err) => done(err));
    })
);
