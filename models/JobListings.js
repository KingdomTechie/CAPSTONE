const mongoose = require("mongoose")

const jobListingSchema = new mongoose.Schema (

    {
        salaryMinRange: Number,
        salaryMaxRange: Number,
        jobTitle: String,
        requiredSkills: [],
        positionStatus: String,
        remote: Boolean,
    },
    {
        timestamps: true,
    }
);


const JobListings = mongoose.model("JobListings", jobListingSchema);

module.exports = JobListings;