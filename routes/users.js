const express = require("express");
const router = express.Router();

const User = require("../models/User");
const usersCtrl = require("../controllers/users");

/* GET users listing. */
router.get("/", usersCtrl.index);

router.get("/new", usersCtrl.new);

router.post("/", usersCtrl.create);

router.delete("/deleteUsers", usersCtrl.delete)

module.exports = router;
