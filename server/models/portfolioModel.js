const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a portfolio name"],
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
  address: {
    type: String,
    required: [true, "Please provide a valid address"]
  },
  skills: {
    type: [String],
    required: [true, "Please provide skills"]
  },
  experience: {
    tpye: Number
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please provide a phone number"],
    trim: true
  }
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
