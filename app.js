//!        använd denna variabel ||| annars port 5000
const port = process.env.PORT || 5000;
const express = require("express");

const cors = require("cors");
const bodyParser = require('body-parser')

const app = express();




//middleware thingys
app.use(cors());
app.use(express.urlencoded({ extended: true })); //! kan ta emot mediapart delar... ex bilder osv till tabell
app.use(bodyParser.json()) //! tar emot json-delar, går även använda .text osv. läser på olika sätt.

//! routes/controllers

const productsController = require("./Controllers/productsController");
app.use("/api/products", productsController); //! endpoint plus controller

//! startar upp apin..

app.listen(port, () =>
	console.log(`Web API running on http://localhost:${port}...`)
);

//! npm start (startar upp apin med nodemon i detta fall)

// http://localhost:5000/api/products


//! 1. Sätt upp API ---> 2. Sätt upp endpoints att hämta prylar från.