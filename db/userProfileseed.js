const db = require("../models")


const user = [{
        firstName: "Brooke",
        lastName: "Velez",
        email: "brookevelez@gmail.com",
        password: "12345",
        username: "bk", unique: true,
        profile: "",
        desiredSalary: 70000,
        desiredIndustry: "Ecommerce",
        remote: true,
        desiredCity: "Los Angeles",
        desiredState: "California",
        profileImg: "",
        bio: "I am a Junior Software Engineer",
        jobStatus: "Full-time",
        educationStatus: "Bootcamp",
        skills: ["JavaScript, Mongoose, Express, MongoDB"],
},
]





const run = async () => {
    
    try {
        await db.User.deleteMany({});
        const createdUser = await db.User.insertMany(user);
        console.log({createdUser});
        process.exit();

    } catch(err) {
        console.log(err);
        process.exit();
    }
}

run();
