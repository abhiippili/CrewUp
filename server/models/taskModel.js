const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const Category = require("./categoryModel");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a task title"],
    trim: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Please provide a category"]
  },
  subCategory: {
    type: String,
    trim: true
  },
  description: {
    type: String
  },
  address: {
    type: String,
    required: [true, "Please provide a valid work address"]
  },
  city: {
    type: String,
    required: [true, "Please provide a valid work city"],
    trim: true
  },
  salary: {
    type: Number,
    required: [true, "Please provide a salary or wage"],
    trim: true
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please provide a phone number"],
    trim: true
  }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
