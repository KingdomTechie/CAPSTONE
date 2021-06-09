const express = require("express")
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");

/*
GET - /register Pres.
POST -/register Func.

GET - /login Pres.
POST - /login Func.
DELETE - /logout Func.
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

    // this hashes out the password so that it's encrypted in the database
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt)
    req.body.password = hash;

    
    // This section converts the "skills" data coming from the form into separate strings 
    let skill = req.body.skills.split(",");
    req.body.skills = skill
    console.log(req.body.skills);

    const newUser = await db.User.create(req.body)
   
    return res.redirect("/login")

    } catch(err) {
        console.log(err);
        return res.render("errors/registrationError")
    }
});


router.get("/login", function(req, res) {
    res.render("auth/login")
});

router.post("/login", async function(req, res) {

    const context = await db.User.findOne

    try {
    const foundUser = await db.User.findOne({email: req.body.email})
    if(!foundUser) return res.redirect("/register");

    const doesMatch = await bcrypt.compare(req.body.password, foundUser.password);

    if (!doesMatch) return res.render("errors/passwordError")

    req.session.currentUser = {
        id: foundUser._id,
        username: foundUser.username
    }
    return res.redirect("/home")

    } catch(err) {
        console.log(err);
        res.send(err)
    }
    
});

router.delete("/logout", async function (req, res) {

        await req.session.destroy()
        return res.redirect("/login")
})

module.exports = router;

