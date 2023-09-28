const locationsController = require("./../controllers/locationsController");

const express = require("express");
const router = express.Router();

router.route("/").get(locationsController.getAllLocations);

module.exports = router;
