const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (

    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: [true, "Must provide a valid email"]},
        password: {type: String, required: [true, "Must provide a valid email"]},
        username: {type: String, required: [true, "You must enter a username"], unique: true},
        profile: {type: mongoose.Schema.Types.ObjectId, ref: "UserProfile"}
    },
    {
        timestamps: true,
    }
);


const User = mongoose.model("User", userSchema);

module.exports = User;