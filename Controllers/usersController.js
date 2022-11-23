const express = require("express");
const controller = express.Router();
let users = require("../Data/simulated_database");

//! POST - create user - http://localhost:5000/api/users

//! req (httpRequest), res (httpResponse)

controller.post("/", (req, res) => {
	let user = {
        id: (users[users.length -1])?.id > 0 ? (users[users.length -1])?.id + 1 : 1, //!checks index of users-list, if id < 0 increment 1 on id
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
	};
    users.push(user) //! pushes the user up to users-list
    res.status(201).json(user) //! sends back CREATED code and user in json format

});

module.exports = controller;
