const express = require("express");
const controller = express.Router();
const contactSchema = require("../Schemas/contactSchema");

controller.route("/").post(async (req, res) => {
	const { name, email, comments } = req.body;

	if (!name || !email || !comments) {
		res.status(400).json({ text: `Some form is not filled correctly.` });
	} else {
		const newComment = await contactSchema.create({
			name,
			email,
			comments,
		});
		if (newComment)
			res.status(200).json({ text: `Comment posted successfully.` });
		else res.status(400).json({ text: `Something went wrong!` });
	}
});

controller.route("/").get(async (req, res) => {
	// const comments = [];
	// const list = await contactSchema.find();
	contactSchema.find({}).then( (comments) => {
		res.send(comments);
	});
	// if (list) {
	// for (let product of list) {
	// 	products.push({
	// 		articleNumber: product._id,
	// 		name: product.name,
	// 		tag: product.tag,
	// 		category: product.category,
	// 		description: product.description,
	// 		rating: product.rating,
	// 		price: product.price,
	// 		imageName: product.imageName,
	// 	});
	//     res.status(200).json(comments);

	// } else {
	// 	res.status(400).json();
	// }
});

module.exports = controller;
