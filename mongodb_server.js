const mongoose = require("mongoose");

const mongodb = async () => {
	const conn = await mongoose.connect(process.env.MONGODB_URI);
	console.log(`MongoDB runs at ${conn.connection.host}`);
};

module.exports = mongodb