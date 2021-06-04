const mongoose = require("mongoose")

const userProfileSchema = new mongoose.Schema (

    {
        desiredSalary: Number,
        desiredIndustry: String,
        remote: Boolean,
        desiredCity: String,
        desiredState: String,
        profileImg: String,
        bio: String,
        jobStatus: String,
        educationStatus: String,
        skills: [],
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    },
    {
        timestamps: true,
    }
);


const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;