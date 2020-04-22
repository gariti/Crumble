const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//set additional environment (process.env.###) variables from config.env
//see 'dotenv' documentation for more info
require("dotenv").config({ path: "./config.env" });

// Set up mongoose/mongodb connection
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//add routes
app.use("/products", require("./routes/product.route"));
app.use("/users", require("./routes/user.route"));

app.listen(process.env.EXPRESS_PORT, () => {
  console.log("Express is up and running on port " + process.env.EXPRESS_PORT);
});
