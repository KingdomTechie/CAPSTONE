const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/intech";

mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then (function () {
        console.log("MongoDB connected!");
    })
    .catch (function (err) {
        console.log("MongoDB error");
        console.log(err);
    })

    mongoose.connection.on("disconnected", function () {
        console.log("MongoDB disconnected");
    });


module.exports = {
    User: require("./User"),
    UserProfile: require("./UserProfile")
}


