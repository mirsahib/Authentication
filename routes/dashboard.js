const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
  console.log(req.body); //this result to undefined
  res.render("dashboard");
});

// the above router should be like this
// app.get('/', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         res.send(req.user.profile);
//     }
// );

module.exports = router;
