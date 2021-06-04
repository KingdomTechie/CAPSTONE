const db = require("../models")


const company = [
    {
    companyName: "Facebook",

    companyImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRAiNZzQqw5hwaWyZX3-KPG5gBHcMkjqPB6KtIakiiY56snwjgt&psig=AOvVaw2Jw2hgefNTzmhoaVoUKKtx&ust=1622849428860000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCtt6_P_PACFQAAAAAdAAAAABAD",

    companyBio: "Facebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California."
},
{
    companyName: "Tapcart",

    companyImg: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmma.prnewswire.com%2Fmedia%2F1167876%2FTapcart_Logo.jpg%3Fp%3Dfacebook&imgrefurl=https%3A%2F%2Fwww.prnewswire.com%2Fnews-releases%2Ftapcart-raises-10-million-in-series-a-funding-led-by-signalfire-301060441.html&tbnid=7FdgsAaUkxgYaM&vet=12ahUKEwiaxPu3-f7wAhWKmJ4KHRToAVgQMygAegUIARCfAQ..i&docid=GcZLl8nQ7w91jM&w=959&h=502&q=tapcart&ved=2ahUKEwiaxPu3-f7wAhWKmJ4KHRToAVgQMygAegUIARCfAQ",

    companyBio: "The Tapcart platform enables ecommerce brands to launch beautifully designed mobile apps at a fraction of the price and within a fraction of the time.acebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California."
},
]


const jobListings = [{
    salaryMinRange: 70000,
    salaryMaxRange: 100000,
    jobTitle: "Junior Software Developer",
    requiredSkills: ["JavaScript", "Node.js", "Express.js"],
    postionStatus: "Full-time",
    remote: true,
    company: "Facebook",
},

{
    salaryMinRange: 80000,
    salaryMaxRange: 120000,
    jobTitle: "Enterprise Launch Engineer",
    requiredSkills: ["Python", "Node.js", "Express.js", "Debugging skills"],
    postionStatus: "Full-time",
    remote: true,
    company: "Facebook",
}
]




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
