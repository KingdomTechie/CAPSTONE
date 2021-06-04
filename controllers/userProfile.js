const express = require("express");
const { User } = require("../models");
const router = express.Router();
const db = require("../models");


router.get("/", function (req, res){
    return res.render("profile/profile")
    // db.User.find({profile: })
})



module.exports = router;