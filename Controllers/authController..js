const express = require("express");
const controller = express.Router();
const userSchema = require("../Schemas/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {generateAccessToken} = require("../Middlewares/authorization");

controller.route("/signup").post(async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	if (!firstName || !lastName || !email || !password) {
		res.status(400).json({ text: "All fields are required" });
	}

	const userExist = await userSchema.findOne({ email });
	if (userExist) {
		res.status(409).json({ text: "A user already exist with this email" });
	} else {
		const saltGenerator = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, saltGenerator);

		const newUser = await userSchema.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		});
		if (newUser) {
			res.status(201).json({ text: "New user created successfully" });
		} else {
			res.status(400).json({ text: "Something went wrong, try again.." });
		}
	}
});

controller.route("/signin").post(async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		res.status(400).json({ text: "All fields are required" });
	}

	const user = await userSchema.findOne({ email });
	if (user && await bcrypt.compare(password, user.password)) {
		res.status(200).json({
			accessToken: generateAccessToken(user._id)
		});
	} else {
		res.status(400).json({ text: "Password or email is incorrect" });
	}
});

module.exports = controller;
