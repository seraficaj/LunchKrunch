const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({});

module.exports = mongoose.model("User", mongoose.model(UserSchema));
