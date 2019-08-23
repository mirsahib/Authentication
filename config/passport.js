const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

// add local authentication strategy with a verification function
passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

//passport jwt authorisation
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
opts.secretOrKey = "mirsahib";
opts.ignoreExpiration = true;

passport.use(
  new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("controls comes here"); //this log never prints on the terminal
    User.findOne({ username: jwt_payload.username }, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

// serialize user object
passport.serializeUser(function(user, done) {
  done(null, user);
});

// deserialize user object
passport.deserializeUser(function(user, done) {
  done(err, user);
});
