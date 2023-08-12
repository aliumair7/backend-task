var express = require("express");
var router = express.Router();
var db = require("../models/index");
const authMIddlewre = require("../middlewears/authenticateHeaderMW");

/* GET home page. */
router.get("/", authMIddlewre, function (req, res, next) {
  res.json({ title: "Express" });
});

router.get("/test-connection", async function (req, res, next) {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
    res.status(200).send("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.status(402).send(`Unable to connect to the database: ${error}`);
  }
});

module.exports = router;
