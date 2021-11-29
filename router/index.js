const express = require("express");
const app = express();

const router = express.Router();
var user = require("./user");

router.get("/index", (req, res) => {
  res.send("index");
});

router.get("/user", user);

module.exports = router;
