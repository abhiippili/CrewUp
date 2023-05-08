const authController = require("./../controllers/authController");
const usersController = require("./../controllers/usersController");

const express = require("express");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser);

router
  .route("/:id")
  .get(usersController.getUser)
  .delete(usersController.deleteUser);

module.exports = router;
