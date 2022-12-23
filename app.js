require("dotenv").config();
const port = process.env.API_PORT || 6000;
const express = require("express");
const mongodb = require("./mongodb_server");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//middleware thingys
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes/controllers

const productsController = require("./Controllers/productsController");
app.use("/api/products", productsController); //! endpoint plus controller
const contactFormController = require("./Controllers/contactFormController");
app.use("/api/contactform", contactFormController);
const authController = require("./Controllers/authController.");
app.use("/api/authentication", authController);

// startar upp apin..
mongodb();
app.listen(port, () =>
	console.log(`Web API running on http://localhost:${port}...`)
);
