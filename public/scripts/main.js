console.log("Sanity Check");

fetch ("mongodb://localhost:27017/intech")
    .then(res => console.log(res))

const react = document.querySelector("#React")
const companyCard = document.querySelector("#companyCard")

react.addEventListener("change", function(e) {
    
    if (react.checked) {

    }
})