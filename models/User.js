const mongoose = require("mongoose")

const userSchema = new mongoose.Schema (

    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        username: {
                    type: String,
                    required: [true, "You must enter a screename"]
                },
        desiredSalary: Number,
        desiredIndustry: String,
        remote: Boolean,
        skills: ["String"],
        desiredLocation: String,
        profileImg: String,
        bio: String,
        jobStatus: String
    }
)


const User = mongoose.model("User", userSchema)

module.exports = User;