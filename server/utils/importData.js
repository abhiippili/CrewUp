const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const Location = require("./../models/locationModel");
const Category = require("./../models/categoryModel");
const User = require("./../models/userModel");
const Task = require("./../models/taskModel");
const Portfolio = require("./../models/portfolioModel");

const database = process.env.DB_STRING.replace(
  "<USERNAME>",
  process.env.DB_USERNAME
).replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose.connect(database).then((con) => {
  console.log("Connected to the database");
});

// Extracting locations data
const locationsData = JSON.parse(
  fs.readFileSync(`${__dirname}/locationsData.json`)
);
// Extracting categories data
const categoriesData = JSON.parse(
  fs.readFileSync(`${__dirname}/categoriesData.json`)
);
// Extracting tasks data
const tasksData = JSON.parse(fs.readFileSync(`${__dirname}/tasksData.json`));

const importLocations = async () => {
  try {
    await Location.create(locationsData);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const importCategories = async () => {
  try {
    await Category.create(categoriesData);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const importTasks = async () => {
  try {
    await Task.create(tasksData);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteLocations = async () => {
  try {
    await Location.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteCategories = async () => {
  try {
    await Category.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteTasks = async () => {
  try {
    await Task.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deletePortfolios = async () => {
  try {
    await Portfolio.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deleteUsers = async () => {
  try {
    await User.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// console.log(process);

if (process.argv[2] === "--importLocations") {
  importLocations();
}
if (process.argv[2] === "--importTasks") {
  importTasks();
} else if (process.argv[2] === "--deleteLocations") {
  deleteLocations();
} else if (process.argv[2] === "--importCategories") {
  importCategories();
} else if (process.argv[2] === "--deleteCategories") {
  deleteCategories();
} else if (process.argv[2] === "--deleteUsers") {
  deleteUsers();
} else if (process.argv[2] === "--deletePortfolios") {
  deletePortfolios();
} else if (process.argv[2] === "--deleteTasks") {
  deleteTasks();
}
