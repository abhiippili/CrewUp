const categoriesController = require("./../controllers/categoriesController");

const express = require("express");
const router = express.Router();

router.route("/").get(categoriesController.getAllCategories);

module.exports = router;
