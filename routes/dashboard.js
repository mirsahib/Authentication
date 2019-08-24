const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
  console.log(req.body); //<---- this is undefined
  res.render("dashboard");
});

// router.get("/", passport.authenticate("jwt", { session: false }), function(
//   req,
//   res
// ) {
//   res.send("Auth");
// });

module.exports = router;
