const express = require("express")
const router = express.Router();
const db = require("../models");


router.get("/", function (req, res){
    return res.render("profile/profile")
})



module.exports = router;