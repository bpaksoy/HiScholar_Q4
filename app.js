const cors = require('cors');
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth-routes");
const apiRoutes = require("./routes/api-routes");
const personalRoutes = require("./routes/personal-routes");
const index = require('./routes/index');
const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const ejs = require("ejs").__express;
//set up express app
const app = express();

app.use(cors());


//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log("connected to mongodb")
});
mongoose.Promise = global.Promise;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(__dirname + "public"))

//set up the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine('.ejs', ejs);

// app.use(express.static(path.join(__dirname, "/client/build/")));

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  }),
  resave: true,
  saveUnInitialized: true,
  unset: 'destroy'
}));

//set up routes
app.use("/auth", authRoutes);
//app.use("/dashboard", profileRoutes);
app.use("/api", apiRoutes);
app.use("/dashboard", personalRoutes);
app.use(express.static("public"))
app.use("*", index);

app.listen(process.env.port || 5000, () => {
  console.log("App listening for requests on port 5000");
})
