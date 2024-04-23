const User = require("../models/User");

module.exports = {
    index,
    create,
    new: newUser,
    delete: deleteUser
}

async function index(req, res) {
    const allUsers = await User.find({});
    res.json(allUsers);
}

async function create(req, res) {
    const newUser = await User.create(req.body);
    res.json(newUser);
}

function newUser(req, res,) {
    res.render("signup", {title: "Sign Up"})
}

async function deleteUser(req, res) {
    const deletedUsers = await User.deleteMany();
    res.json(deletedUsers);

}