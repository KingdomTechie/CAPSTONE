const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (

    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: [true, "Must provide a valid email"]},
        password: {type: String, required: [true, "Must provide a valid email"]},
        username: {type: String, required: [true, "You must enter a username"], unique: true},
        desiredSalary: Number,
        desiredIndustry: String,
        remote: Boolean,
        desiredLocation: String,
        profileImg: String,
        bio: String,
        jobStatus: String,
        educationStatus: String,
        // skills: ["String"],
    },
    {
        timestamps: true,
    }
);


const User = mongoose.model("User", userSchema);

module.exports = User;