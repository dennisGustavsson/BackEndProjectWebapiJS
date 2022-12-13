const mongoose = require("mongoose");

const contactFormSchema = mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId },
		name: { type: String, required: true },
		email: { type: String, required: true },
        comments: { type: String, required: true },
	},
	{
		versionKey: false, // stops from adding __v: to a new product
	}
);

module.exports = mongoose.model("contactform", contactFormSchema);
