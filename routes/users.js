var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/create", function(req, res, next) {
  res.send("/create user test")
})

module.exports = router;
