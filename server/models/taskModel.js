const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a task title"],
    trim: true
  },
  category: {
    type: String,
    required: [true, "Please provide a category"],
    trim: true
  },
  description: {
    type: String
  },
  workAddress: {
    type: String,
    required: [true, "Please provide a valid work address"]
  },
  workCity: {
    type: String,
    required: [true, "Please provide a valid work city"],
    trim: true
  },
  wage: {
    type: Number,
    required: [true, "Please provide a wage"],
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
