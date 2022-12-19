const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongodb = async () => {
	const conn = await mongoose.connect(process.env.MONGODB_URI);
	console.log(`MongoDB runs at ${conn.connection.host}`);
};

module.exports = mongodb;
