const express = require("express");
const controller = express.Router();
let users = require("../Data/simulated_database");

//! middlware
controller.param("id", (req, res, next, id) => {
	req.user = users.find((user) => user.id == id);
	next();
});

//! POST - create user - http://localhost:5000/api/users

//! req (httpRequest), res (httpResponse)

controller
	.route("/")
	.post((req, res) => {
		let user = {
			id: users[users.length - 1]?.id > 0 ? users[users.length - 1]?.id + 1 : 1, //!checks index of users-list, if id < 0 increment 1 on id
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
		};
		users.push(user); //! pushes the user up to users-list
		res.status(201).json(user); //! sends back CREATED code and user in json format
	})
	//!get all
	.get((req, res) => {
		res.status(200).json(users);
	});

//! GET ONE - READ - http://localhost:5000/api/users/id

controller
	.route("/:id")
	.get((req, res) => {
		if (req.user != undefined) {
			console.log(req.user);
			res.status(200).json(req.user);
		} else {
			res.status(404).json();
		}
	})
	.put((req, res) => {
		if (req.user != undefined) {
			users.forEach((user) => {
				if (user.id == req.user.id) {
					user.firstName = req.body.firstName
						? req.body.firstName
						: user.firstName;
					user.lastName = req.body.lastName ? req.body.lastName : user.lastName;
					user.email = req.body.email ? req.body.email : user.email;
				}
			});
			res.status(200).json(req.user);
		} else {
			res.status(404).json();
		}
	})
	.delete((req, res) => {
		if (req.user != undefined) {
            users = users.filter(user => user.id !== req.user.id)
            res.status(204).json()
		} else {
			res.status(404).json();
		}
	});

// controller.get("/:id", (req, res) => {
// 	res.status(200).json(users);
// });

module.exports = controller;
