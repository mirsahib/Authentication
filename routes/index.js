const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
  res.status(200).render("index");
});
router.post("/", (req, res) => {
  const user = req.body;
  const newUser = new User({
    username: user.user,
    password: user.pass
  });
  //console.log(newUser);
  newUser.save(err => {
    if (err) {
      res.status(400).json({ msg: "Bad request" });
    } else {
      //console.log("success");
      res.status(200).json({ msg: "Success" });
    }
  });
});

module.exports = router;
