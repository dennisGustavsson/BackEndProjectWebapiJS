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

controller.route("/").get(async (req, res) => {
	const products = []
	const list = await productSchema.find();
	if(list) {
		
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

controller.route("/:tag").get(async (req, res) => {
	const list = await productSchema.find({ tag: req.params.tag });
	const products = [];

	if(list) {
		for(let product of list) {
			products.push({
				articleNumber: product._id,
				name: product.name,
				tag: product.tag,
				category: product.category,
				description: product.description,
				rating: product.rating,
				price: product.price,
				imageName: product.imageName
			})
		}
		res.status(200).json(products);
	} else {
		res.status(404).json();
	}
});
controller.route('/:tag/:limit').get(async(req,res) => {
	const list = await productSchema.find({ tag: req.params.tag }).limit(req.params.limit);
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
})
controller.route("/product/details/:articleNumber").get(async (req, res) => {
	const product = await productSchema.findById(req.params.articleNumber)
	if(product) {
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


//secured routes (update, delete, create)

/* controller
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
	}); */

//! GET ONE - READ - DELETE - UPDATE http://localhost:5000/api/products/product/articleNumber

// controller
// 	.route("/product/:articleNumber")
// 	.get((req, res) => {
// 		if (req.product != undefined) {
// 			res.status(200).json(req.product);
// 		} else {
// 			res.status(404).json();
// 		}
// 	})
// 	.put((req, res) => {
// 		if (req.product != undefined) {
// 			products.forEach((product) => {
// 				if (product.articleNumber == req.product.articleNumber) {
// 					product.name = req.body.name ? req.body.name : product.name;
// 					product.category = req.body.category
// 						? req.body.category
// 						: product.category;
// 					product.price = req.body.price ? req.body.price : product.price;
// 					product.rating = req.body.rating ? req.body.rating : product.rating;
// 					product.description = req.body.description
// 						? req.body.description
// 						: product.description;
// 				}
// 			});
// 			res.status(200).json(req.product);
// 		} else {
// 			res.status(404).json();
// 		}
// 	})
// 	.delete((req, res) => {
// 		if (req.product != undefined) {
// 			products = products.filter(
// 				(product) => product.articleNumber !== req.product.articleNumber
// 			);
// 			res.status(204).json();
// 		} else {
// 			res.status(404).json();
// 		}
// 	});

// // //! get products by tag-value
// // //! http://localhost:5000/api/products/tag
// controller.route("/:tag").get((req, res) => {
// 	if (req.products != undefined) {
// 		res.status(200).json(req.products);
// 	} else {
// 		res.status(404).json();
// 	}
// });

// // //!     http://localhost:5000/api/products/tag/number
// controller.route("/:tag/:take").get((req, res) => {
// 	let newList = [];

// 	for (let i = 0; i < Number(req.params.take); i++) {
// 		newList.push(req.products[i]);
// 	}
// 	res.status(200).json(newList);
// });

// // 	//! get products by category-value
// // //! http://localhost:5000/api/products/category/::
// controller.route("/:category").get((req, res) => {

// 	if (req.products != undefined) {

// 		res.status(200).json(req.products);
// 	} else {

// 		res.status(404).json();
// 	}
// 	console.log(req.params.category);
// });

module.exports = controller;
