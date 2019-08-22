const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
var bodyParser = require("body-parser");

require("./config/passport");

//database setting
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.log(err);
  });
//set view engine
app.set("view engine", "ejs");

//body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/index.js"));
app.use("/login", require("./routes/login"));
//this route should be change
app.use("/dashboard", require("./routes/dashboard"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Application is running on port 3000");
});
