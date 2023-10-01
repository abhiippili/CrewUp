const tasksController = require("./../controllers/tasksController");
const authController = require("./../controllers/authController");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(tasksController.getAllTasks)
  .post(
    authController.protect,
    authController.restrictTo("admin", "user"),
    tasksController.createTask
  );

router.get("/mytasks", authController.protect, tasksController.getMyTasks);
router
  .route("/:id")
  .get(tasksController.getTask)
  .put(authController.protect, tasksController.updateTask)
  .delete(authController.protect, tasksController.deleteTask);

module.exports = router;
