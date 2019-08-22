const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

// add local authentication strategy with a verification function
passport.use(
  new LocalStrategy(
    // your verification logic goes here
    // this test verification function always succeeds and returns a hard-coded user
    function(user, pass, done) {
      console.log("Verification function called");
      //console.log(username + " " + password);
      return User.findOne({ username: user, password: pass }).then(user => {
        if (!user) {
          return done(null, false, {
            message: "Incorrect email or password."
          });
        }
        return done(null, user, { message: "Logged In Successfully" });
      });
      //.catch(err => done(err));
      //return done(null, { user, pass });
    }
  )
);

// serialize user object
passport.serializeUser(function(user, done) {
  done(null, user);
});

// deserialize user object
passport.deserializeUser(function(user, done) {
  done(err, user);
});
