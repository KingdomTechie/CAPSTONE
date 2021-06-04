/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo")
const bcrypt = require("bcryptjs");
require("dotenv").config();

/* ==== Internal Modules ==== */
const controllers = require("./controllers");

/* ==== Instanced Modules ==== */
const app = express();

/* ==== Configuration ==== */

// use the env port OR the port 4000
const PORT = process.env.PORT || 4000;

// EJS is the view engine.  Will need it for views
app.set("view engine", "ejs");

/* ==== Middleware ==== */

// Public folder middleware
app.use(express.static(__dirname + "/public"));
// body data middleware
app.use(express.urlencoded({ extended: true }));

// method override middleware
app.use(methodOverride("_method"));

// middleware to serve public as static files

// Session middleware
app.use(session({
  store: MongoStore.create({mongoUrl: "mongodb://localhost:27017/intech"}),
  secret: "Super Secret Waffles",
  reseave: false,
  saveUninitialized: false,
  cooke: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // One week cookie age
  }
}))

// this adds user credentials to all ejs files
app.use(function (req, res, next) {
  app.locals.user = req.session.currentUser;
  next()
})

// authRequried middleware
const authRequired = function (req, res, next) {
  if(req.session.currentUser) {
    return next()
  }
  return res.redirect("/login")
}

// Logger Middleware - Helper tool
app.use(function (req, res, next) {
  console.log(req.session);
  console.log(`${req.method} - ${req.url}`);
  next();
});

/* ==== Routes/Controllers ==== */

// Home routes
app.get("/", function (req, res) {
  const context = {user: req.session.currentUser}
  res.render("home", context);
});

app.use("/", controllers.auth)

app.use("/profile", authRequired, controllers.userProfile)

/* ==== Server Listener ==== */
app.listen(PORT, function () {
  console.log(`InTech application is live at http://localhost:${PORT}/`);
});