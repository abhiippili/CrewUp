const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: [true, "Please provide a location"]
  }
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;