const tasksController = require("./../controllers/tasksController");

const express = require("express");
const router = express.Router();

router.route("/").get(tasksController.getAllTasks);

module.exports = router;
