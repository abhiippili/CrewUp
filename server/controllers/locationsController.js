const catchAsync = require("../utils/catchAsync");
const Location = require("./../models/locationModel");

exports.getAllLocations = catchAsync(async (req, res) => {
  const locations = await Location.find({});
  res.status(200).json({
    status: "success",
    data: {
      locations
    }
  });
});
