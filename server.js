/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");

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

// body data middleware
app.use(express.urlencoded({ extended: true }));

// method override middleware
app.use(methodOverride("_method"));

// middleware to serve public as static files

// all controller functions take in req,res,next
app.use(function (req, res, next) {
  console.log(`${req.method} - ${req.url}`);
  console.log(req.session);
  // we use next in routes to tell express to move on to the next route in order
  next();
});

/* ==== Routes/Controllers ==== */

// Home routes
app.get("/", function (req, res) {
  res.render("home");
});

app.use("/users", controllers.users)

/* ==== Server Listener ==== */
app.listen(PORT, function () {
  console.log(`InTech application is live at http://localhost:${PORT}/`);
});