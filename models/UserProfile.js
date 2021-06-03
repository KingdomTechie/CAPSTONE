const mongoose = require("mongoose")

const userProfileSchema = new mongoose.Schema (

    {
        desiredSalary: Number,
        desiredIndustry: String,
        remote: Boolean,
        desiredLocation: String,
        profileImg: String,
        bio: String,
        jobStatus: String,
        educationStatus: String,
        skills: [],
    },
    {
        timestamps: true,
    }
);


const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;