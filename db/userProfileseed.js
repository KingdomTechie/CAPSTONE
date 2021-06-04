const db = require("../models")


const user = [{
        firstName: "Brooke",
        lastName: "Velez",
        email: "brookevelez@gmail.com",
        password: "12345",
        username: "bk", unique: true,
        profile: ""
},
]


const profile = [{
        desiredSalary: 70000,
        desiredIndustry: "Ecommerce",
        remote: true,
        desiredCity: "Los Angeles",
        desiredState: "California",
        profileImg: "",
        bio: "I am a Junior Software Engineer",
        jobStatus: "Full-time",
        educationStatus: "Bootcamp",
        skills: ["JavaScript","Mongoose","Express","MongoDB"],
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}]




const run = async () => {
    
    try {
        await db.Company.deleteMany({});
        const createdCompany = await db.Company.insertMany(company);
        console.log({createdCompany});

        await db.JobListings.deleteMany({});
        
        
        for(joblisting of jobListings) {
            const foundCompany = await db.Company.findOne({companyName: joblisting.company});
            joblisting.company = foundCompany;
            const createdJoblisting = await db.JobListings.create(joblisting)
            console.log(createdJoblisting);
        }
        process.exit();

    } catch(err) {
        console.log(err);
        process.exit();
    }
}

run();
