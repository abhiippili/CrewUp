const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  location: {
    type: String,
    required: [true, "Please provide a location"]
  },
  latitude: {
    type: Number,
    required: [true, "Please provide the latitude"]
  },
  longitude: {
    type: Number,
    required: [true, "Please provide the longitude"]
  }
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
