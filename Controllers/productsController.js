const express = require("express");
const controller = express.Router();

let products = require("../Data/simulated_database");

//!POST - CREATE - skapa product
//! http://localhost:5000/api/products

//! - - - - - - - vanligtvis req och res bara
controller.post("/", (httpRequest, httpResponse) => {
	let product = {
// id pryl user index plus ett eller ett
        
		articleNumber: httpRequest.body.articleNumber,
		name: httpRequest.body.name,
		description: httpRequest.body.description,
		category: httpRequest.body.category,
		price: httpRequest.body.price,
		rating: httpRequest.body.rating,
		imageName: httpRequest.body.imageName,
	};

    products.push(product)
    httpResponse.status(201).json(product)
});

module.exports = controller;
