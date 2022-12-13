const express = require("express");
const controller = express.Router();
const productSchema = require("../Schemas/productSchema"); //istället för simulerad data
// let products = require("../Data/simulated_database");
// const products = require("../Data/simulated_database");

// //! middlware
// controller.param("articleNumber", (req, res, next, articleNumber) => {
// 	req.product = products.find((x) => x.articleNumber == articleNumber);
// 	next();
// });
// controller.param("category", (req, res, next, category) => {
// 	req.products = products.filter((x) => x.category == category);
// 	next();
// });
// //! filter out all specified tags keys from the array ex, featured, flashsale osv
// controller.param("tag", (req, res, next, tag) => {
// 	req.products = products.filter((example) => example.tag == tag);
// 	next();
// });

//unsecured routes
//! route / går till products/ (Standard routen)
//! POST - create user - http://localhost:5000/api/products

//GET ALL PRODUCTS

controller.route("/").get(async (req, res) => {
	const products = [];
	const list = await productSchema.find();
	if (list) {
		for (let product of list) {
			products.push({
				articleNumber: product._id,
				name: product.name,
				tag: product.tag,
				category: product.category,
				description: product.description,
				rating: product.rating,
				price: product.price,
				imageName: product.imageName,
			});
		}
		res.status(200).json(products);
	} else {
		res.status(400).json();
	}
});

//GET BY TAG

controller.route("/:tag").get(async (req, res) => {
	const list = await productSchema.find({ tag: req.params.tag });
	const products = [];

	if (list) {
		for (let product of list) {
			products.push({
				articleNumber: product._id,
				name: product.name,
				tag: product.tag,
				category: product.category,
				description: product.description,
				rating: product.rating,
				price: product.price,
				imageName: product.imageName,
			});
		}
		res.status(200).json(products);
	} else {
		res.status(404).json();
	}
});

// GET BY TAG PLUS LIMIT AMOUNT

controller.route("/:tag/:limit").get(async (req, res) => {
	const list = await productSchema
		.find({ tag: req.params.tag })
		.limit(req.params.limit);
	const products = [];

	if (list) {
		for (let product of list) {
			products.push({
				articleNumber: product._id,
				name: product.name,
				tag: product.tag,
				category: product.category,
				description: product.description,
				rating: product.rating,
				price: product.price,
				imageName: product.imageName,
			});
		}
		res.status(200).json(products);
	} else {
		res.status(404).json();
	}
});

// GET BY ID
controller.route("/product/details/:articleNumber").get(async (req, res) => {
	const product = await productSchema.findById(req.params.articleNumber);
	if (product) {
		res.status(200).json({
			articleNumber: product._id,
			name: product.name,
			tag: product.tag,
			category: product.category,
			description: product.description,
			rating: product.rating,
			price: product.price,
			imageName: product.imageName,
		});
	} else {
		res.status(404).json();
	}
});


// GET PRODUCTS BY CATEGORY
controller.route("/categories/category/:category").get(async (req, res) => {
	const list = await productSchema.find({ category: req.params.category });
	const products = [];

	if (list) {
		for (let product of list) {
			products.push({
				articleNumber: product._id,
				name: product.name,
				tag: product.tag,
				category: product.category,
				description: product.description,
				rating: product.rating,
				price: product.price,
				imageName: product.imageName,
			});
		}
		res.status(200).json(products);
	} else {
		res.status(404).json();
	}
});

//secured routes (update, delete, create)

// CREATE NEW PRODUCT
controller.route("/").post(async (req, res) => {
	const { name, tag, category, description, rating, price, imageName } =
		req.body;
	if (!name || !price) {
		res.status(400).json({ text: "Name and price is required" });
	}
	const productExists = await productSchema.findOne({ name });
	if (productExists) {
		res
			.status(409)
			.json("A product with this name already exist in the database..");
	} else {
		const product = await productSchema.create({
			name,
			tag,
			category,
			rating,
			price,
			description,
			imageName,
		});
		if (product) {
			res.status(201).json(product);
		} else {
			res.status(400).json("Something went wrong");
		}
	}
});

// UPDATE SPECIFIC PRODUKT

controller.route("/product/details/:articleNumber").put(async (req, res) => {
	const item = await productSchema.findById(req.params.articleNumber);

	if (!item) {
		res.status(400).json("Didt find any article number");
	} else {
		await productSchema.findOneAndUpdate(
			{ _id: item._id },
			{
				name: req.body.name,
				tag: req.body.tag,
				category: req.body.category,
				rating: req.body.rating,
				price: req.body.price,
				description: req.body.description,
				imageName: req.body.imageName,
			}
		);
		res.status(204).json(item);
	}
});

// DELETE SPECIFIC PRODUKT

controller.route("/product/details/:articleNumber").delete(async (req, res) => {
	if (!req.params.articleNumber) {
		res.status(400).json("Didt find any article number");
	} else {
		const item = productSchema.findById(req.params.articleNumber);
		if (item) {
			await productSchema.deleteOne(item);
			res
				.status(200)
				.json(
					`The product (${req.params.articleNumber})  is now deleted from the database..`
				);
		} else {
			res
				.status(404)
				.json(
					`A product with article number ${req.params.articleNumber} was not found`
				);
		}
	}
});




module.exports = controller;
