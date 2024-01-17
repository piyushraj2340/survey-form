const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const url = `mongodb+srv://${process.env.COLLECTION_NAME}:${process.env.COLLECTION_PASSWORD}@assignment.irsabln.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to Database!...");
}).catch((err) => {
    console.log(url);
    console.log("Connection error: " + err.message);
});