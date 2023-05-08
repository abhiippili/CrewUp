const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const User = require("./../models/userModel");
const Task = require("./../models/taskModel");
const Portfolio = require("./../models/portfolioModel");
const Location = require("./../models/locationModel");
const Category = require("./../models/categoryModel");

const dbString = process.env.DB_STRING.replace(
  "<USERNAME>",
  process.env.DB_USERNAME
).replace("<PASSWORD>", process.env.DB_PASS);

mongoose.connect(dbString).then((con) => {
  console.log("Connected to the database");
});

// Extracting customers data
const customersData = JSON.parse(
  fs.readFileSync(`${__dirname}/customersData.json`)
);

const importCustomers = async () => {
  try {
    await Customer.create(customersData);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteCustomers = async () => {
  try {
    await Customer.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteTransactions = async () => {
  try {
    await Transaction.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--importCustomers") {
  importCustomers();
} else if (process.argv[2] === "--deleteCustomers") {
  deleteCustomers();
} else if (process.argv[2] === "--deleteTransactions") {
  deleteTransactions();
}

// Generate random acc num
// console.log(Math.floor(Math.random() * (1000000-100000) + 100000))
