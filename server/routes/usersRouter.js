const authController = require("./../controllers/authController");
const usersController = require("./../controllers/usersController");

const express = require("express");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.post("/adminlogin", authController.adminlogin);
router.get(
  "/myprofile",
  authController.protect,
  usersController.getProfile,
  usersController.getUser
);
router.put(
  "/updateProfile",
  authController.protect,
  usersController.updateProfile
);

router.delete(
  "/deleteProfile",
  authController.protect,
  usersController.deleteProfile,
  usersController.deleteUser
);

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser);

router
  .route("/:id")
  .get(usersController.getUser)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    usersController.deleteUser
  );

module.exports = router;
