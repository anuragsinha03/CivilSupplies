const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

function connectToDatabase() {
	mongoose
		.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("MongoDB connected");
		})
		.catch(err => {
			console.error("Error connecting to MongoDB:", err);
			process.exit(1);
		});
}

module.exports = connectToDatabase;
