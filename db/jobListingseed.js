const db = require("../models")

const jobListings = [{
    salaryMinRange: 70000,
    salaryMaxRange: 100000,
    jobTitle: "Junior Software Developer",
    requiredSkills: ["JavaScript", "Node.js", "Express.js"],
    postionStatus: "Full-time",
    remote: true,
    company: "Facebook"
}]

const company = [{
    companyName: "Facebook",
    companyImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRAiNZzQqw5hwaWyZX3-KPG5gBHcMkjqPB6KtIakiiY56snwjgt&psig=AOvVaw2Jw2hgefNTzmhoaVoUKKtx&ust=1622849428860000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCtt6_P_PACFQAAAAAdAAAAABAD",
    companyBio: "Facebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California."
},
]


// db.JobListings.create(jobListings[0], function (err, createdJobListing) {
//     if (err) return console.log(err);
//     console.log({createdJobListing});
// })

// db.Company.create(company[0], function (err, createdCompany) {
//     if (err) return console.log(err);
//     console.log({createdCompany});
// })

const run = async () => {

    try {
        await db.Company.deleteMany({});
        await db.JobListings.deleteMany({});
        const createdCompany = await db.Company.insertMany(company);
        console.log({createdCompany});

        for(joblisting of jobListings) {
            const foundCompany = await db.Company.findOne({company: joblisting.name});
            console.log(foundCompany);
            // company.name = foundCompany
            // await db.create
        }
        process.exit();

    } catch(err) {
        console.log(err);
        process.exit();
    }
}

run();