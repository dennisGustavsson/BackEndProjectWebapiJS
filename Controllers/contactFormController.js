const express = require("express");
const controller = express.Router();
const contactSchema = require("../Schemas/contactSchema");

// Get and post for contactform

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
	contactSchema.find({}).then( (comments) => {
		res.send(comments);
	});
});

module.exports = controller;
