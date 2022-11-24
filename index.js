//!        använd denna variabel ||| annars port 5000
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require('body-parser')

//! creates express application
const express = require("express");
const app = express();

//middleware CORS thingys
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
const usersController = require("./Controllers/usersController");
app.use("/api/users", usersController);

app.listen(port, () =>
	console.log(`WebAPI running on http://localhost:${port}...`)
);

// http://localhost:5000/api/products
