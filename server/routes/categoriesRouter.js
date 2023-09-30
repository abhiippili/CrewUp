const categoriesController = require("./../controllers/categoriesController");

const express = require("express");
const router = express.Router();

router.get("/", categoriesController.getAllCategories);

module.exports = router;
