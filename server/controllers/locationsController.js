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

exports.getLocationNearMe = catchAsync(async (req, res, next) => {
  const { latitude, longitude } = req.query;
  const locations = await Location.find();
  let min = Infinity;
  let minLocation = null;
  locations.forEach((location) => {
    const distance = calculateDistance(
      latitude,
      longitude,
      location.latitude,
      location.longitude
    );
    if (distance < min) {
      min = distance;
      minLocation = location;
    }
  });
  res.status(200).json({
    status: "success",
    data: {
      location: minLocation
    }
  });
});

function calculateDistance(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371;

  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const lat2Rad = toRadians(lat2);
  const lon2Rad = toRadians(lon2);

  const latDiff = lat2Rad - lat1Rad;
  const lonDiff = lon2Rad - lon1Rad;

  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiff / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadiusKm * c;

  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
