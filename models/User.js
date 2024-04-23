const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Password hash middleware.
UserSchema.pre('save', function (next) {
    if (this.isModified('password') || this.isNew) {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }
    next();
});

// Helper method for validating user's password.
UserSchema.methods.comparePassword = function (inputPassword, cb) {
    bcrypt.compare(inputPassword, this.password, (err, isMatch) => {
        if (err) { return cb(err); }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model("User", UserSchema);
