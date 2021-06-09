const db = require("../models")


const company = [
    {
    companyName: "Facebook",
    companyImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRAiNZzQqw5hwaWyZX3-KPG5gBHcMkjqPB6KtIakiiY56snwjgt&psig=AOvVaw2Jw2hgefNTzmhoaVoUKKtx&ust=1622849428860000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCtt6_P_PACFQAAAAAdAAAAABAD",
    companyBio: "Facebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California."
},
{
    companyName: "Tapcart",
    companyImg: "https://mma.prnewswire.com/media/1167876/Tapcart_Logo.jpg?p=publish",
    companyBio: "The Tapcart platform enables ecommerce brands to launch beautifully designed mobile apps at a fraction of the price and within a fraction of the time.acebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California."
},
{
    companyName: "Amazon",
    companyImg: "https://variety.com/wp-content/uploads/2018/01/amazon-logo.jpg",
    companyBio: "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence."
},
{
    companyName: "Google",
    companyImg: "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg",
    companyBio: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware."
},
]


const jobListings = [{
    salaryMinRange: 70000,
    salaryMaxRange: 100000,
    jobTitle: "Junior Software Developer",
    jobDescription: "You will be making full stack applications",
    requiredSkills: ["JavaScript", "Node", "Express"],
    postionStatus: "Full-time",
    remote: true,
    company: "Facebook",
},

{
    salaryMinRange: 80000,
    salaryMaxRange: 120000,
    jobTitle: "Enterprise Launch Engineer",
    jobDescription: "As our Mobile App Deployment Specialist you’ll be responsible for updating and maintaining our customer's mobile apps. ",
    requiredSkills: ["Python", "Node", "Express", "Debugging"],
    postionStatus: "Full-time",
    remote: true,
    company: "Tapcart",
},
{
    salaryMinRange: 80000,
    salaryMaxRange: 120000,
    jobTitle: "Solutions Architect",
    jobDescription: "Amazon Web Services is looking for a highly motivated Solutions Architect to help accelerate customer adoption.",
    requiredSkills: ["Python", "Node", "AWS"],
    postionStatus: "Full-time",
    remote: true,
    company: "Amazon",
},
{
    salaryMinRange: 80000,
    salaryMaxRange: 120000,
    jobTitle: "Software Engineer, Site Reliability Engineering",
    jobDescription: "On the SRE team, you’ll have the opportunity to manage the complex challenges of scale which are unique to Google, while using your expertise in coding, algorithms, complexity analysis and large-scale system design.",
    requiredSkills: ["C++", "Java", "Python", "Go", "Algorithms", "Data Structures"],
    postionStatus: "Full-time",
    remote: true,
    company: "Google",
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
