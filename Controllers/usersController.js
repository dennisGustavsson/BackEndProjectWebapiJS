const express = require("express");
const controller = express.Router();
let products = require("../Data/simulated_database");

//! middlware
controller.param("articleNumber", (req, res, next, articleNumber) => {
	req.product = products.find(
		(product) => product.articleNumber == articleNumber
	);
	next();
});

//! POST - create user - http://localhost:5000/api/users

//! req (httpRequest), res (httpResponse)

controller
	.route("/")
	.post((req, res) => {
		let product = {
			articleNumber:
				products[products.length - 1]?.articleNumber > 0
					? products[products.length - 1]?.articleNumber + 1
					: 1, //!checks index of users-list, if id < 0 increment 1 on id
			name: req.body.name,
			category: req.body.category,
			rating: req.body.rating,
			price: req.body.price,
			description: req.body.description,
		};
		products.push(product); //! pushes the user up to users-list
		res.status(201).json(product); //! sends back CREATED code and user in json format
	})
	//!get all
	.get((req, res) => {
		res.status(200).json(products);
	});

//! GET ONE - READ - http://localhost:5000/api/users/id

controller
	.route("/:articleNumber")
	.get((req, res) => {
		if (req.product != undefined) {
			res.status(200).json(req.product);
		} else {
			res.status(404).json();
		}
	})
	.put((req, res) => {
		if (req.product != undefined) {
			products.forEach((product) => {
				if (product.articleNumber == req.product.articleNumber) {
					product.name = req.body.name ? req.body.name : product.name;
					product.category = req.body.category
						? req.body.category
						: product.category;
					product.price = req.body.price ? req.body.price : product.price;
					product.rating = req.body.rating ? req.body.rating : product.rating;
					product.description = req.body.description
						? req.body.description
						: product.description;
				}
			});
			res.status(200).json(req.product);
		} else {
			res.status(404).json();
		}
	})
	.delete((req, res) => {
		if (req.product != undefined) {
			products = products.filter(
				(product) => product.articleNumber !== req.product.articleNumber
			);
			res.status(204).json();
		} else {
			res.status(404).json();
		}
	});

// controller.get("/:id", (req, res) => {
// 	res.status(200).json(users);
// });

module.exports = controller;
