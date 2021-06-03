const express = require("express")
const router = express.Router();
const db = require("../models");

/*
GET - /register Pres.
POST -/register Func.

GET - /login Pres.
POST - /login Func
*/

router.get("/register", function(req, res) {
    res.render("auth/register")
});

router.post("/register", async function(req, res) {
    const foundUser = await db.User.findOne({email: req.body.email})

    try {
    if (foundUser) {
        return res.redirect("/login")
    }

    const newUser = await db.User.create(req.body)
    return res.redirect("/login")

    } catch(err) {
        console.log(err);
        return res.send(err)
    }
});


router.get("/login", function(req, res) {
    res.render("login")
});

router.post("/login", function(req, res) {
    
});

module.exports = router;

