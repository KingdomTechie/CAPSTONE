const db = require("../models")

const jobListings = [{
    salaryMinRange: 70000,
    salaryMaxRange: 100000,
    jobTitle: "Junior Software Developer",
    requiredSkills: ["JavaScript", "Node.js", "Express.js"],
    postionStatus: "Full-time",
    remote: true,
}]


db.JobListings.create(jobListings[0], function (err, createdJobListing) {
    if (err) return console.log(err);
    console.log({createdJobListing});
})