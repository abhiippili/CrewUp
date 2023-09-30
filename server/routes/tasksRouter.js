const tasksController = require("./../controllers/tasksController");
const authController = require("./../controllers/authController");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(tasksController.getAllTasks)
  .get(tasksController.getTask)
  .post(
    authController.protect,
    authController.restrictTo("admin", "user"),
    tasksController.createTask
  );

router
  .route("/:id")
  .get(tasksController.getTask)
  .put(authController.protect, tasksController.updateTask)
  .delete(authController.protect, tasksController.deleteTask);

module.exports = router;
