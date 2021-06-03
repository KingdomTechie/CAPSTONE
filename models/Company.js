const mongoose = require("mongoose")

const companySchema = new mongoose.Schema (

    {
        companyName: String,
        companyImg: String,
        companyBio: String,
        joblistings: [{type: mongoose.Schema.Types.ObjectId, ref: "JobListings"}]
    },
    {
        timestamps: true,
    }
);


const Company = mongoose.model("Company", companySchema);

module.exports = Company;