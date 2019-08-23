const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
  //console.log(req.token);
  //res.send(req.body);
  //res.render("dashboard");
  console.log(req.body);
  res.render("dashboard");
  //res.send("Auth");
});

module.exports = router;
