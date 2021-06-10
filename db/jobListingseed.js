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
{
    companyName: "Activision",
    companyImg: "https://www.baystreet.ca/images/articlegroups/original/17/private/activision.jpg",
    companyBio: "Activision Publishing, Inc. is an American video game publisher based in Santa Monica, California. It currently serves as the publishing business for its parent company, Activision Blizzard, and consists of several subsidiary studios."
},
{
    companyName: "AT&T",
    companyImg: "https://www.cordcuttersnews.com/wp-content/uploads/2019/09/ATT-logo.png",
    companyBio: "AT&T Inc. is an American multinational conglomerate holding company, Delaware-registered but headquartered at Whitacre Tower in Downtown Dallas, Texas. It is the world’s largest telecommunications company, and the second largest provider of mobile telephone services."
}
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
},
{
    salaryMinRange: 80000,
    salaryMaxRange: 120000,
    jobTitle: "Junior Network Programmer",
    jobDescription: "Activision Central Tech is seeking talented junior programmers to join its 2-year rotational engineering program within its online services teams.",
    requiredSkills: ["C++", "Java", "Python"],
    postionStatus: "Full-time",
    remote: true,
    company: "Activision",
},
{
    salaryMinRange: 80000,
    salaryMaxRange: 120000,
    jobTitle: "Junior Software Engineer",
    jobDescription: "AT&T Mobility & Entertainment is looking for a forward-thinking, innovative and unusually talented developer to join us in our El Segundo, CA offices. This position will work in an agile organization, developing, releasing and supporting the platform that supports AT&T TV, AT&T’s next generation linear TV product.",
    requiredSkills: ["C++", "Java", "Python"],
    postionStatus: "Full-time",
    remote: true,
    company: "AT&T",
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
