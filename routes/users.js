var express = require("express");
var router = express.Router();
const { getUser } = require("../controllers/v1/users");

/* GET users listing. */

router.get("/user", getUser);

module.exports = router;
