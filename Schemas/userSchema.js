const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId },
		firstName: { type: String, required: [true, "Enter your first name"] },
		lastName: { type: String, required: [true, "Enter your last name"] },
		email: { type: String, required: [true, "Enter your email"], unique: true },
		password: { type: String, required: [true, "Enter a password"] },
	},
	{
		versionKey: false, // stops from adding __v: to a new product
	}
);

module.exports = mongoose.model("users", userSchema);
