const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
//require("../config/passport");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      const token = jwt.sign(user.toJSON(), "mirsahib");
      var id = user._id;
      //console.log(user.toJSON());
      //return res.status(200).send(info);
      return res.json({ id, token });
    });
  })(req, res, next);
});

module.exports = router;
