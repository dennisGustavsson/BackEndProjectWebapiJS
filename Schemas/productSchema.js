const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	id: { type: mongoose.Schema.Types.ObjectId },
	name: { type: String, required: true },
	tag: { type: String },
	category: { type: String },
	description: { type: String },
	rating: { type: Number },
	price: { type: Number, required: true },
	imageName: { type: String },
});

module.exports = mongoose.model("products", productSchema);