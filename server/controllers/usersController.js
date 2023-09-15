const AppError = require("../utils/appError");
const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");

exports.updateProfile = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("You can not update the password", 400));
  }
  const body = {
    username: req.body.username,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    address: req.body.address,
    city: req.body.city
  };
  const updatedUser = await User.findByIdAndUpdate(req.user._id, body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser
    }
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    data: {
      users
    }
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError("No task found with given id", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      user
    }
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    address: req.body.address,
    city: req.body.city,
    changedPasswordTime: req.body.changedPasswordTime
  });
  res.status(201).json({
    status: "success",
    data: {
      user: newUser
    }
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return next(new AppError("No user found with given id", 404));
  }
  res.status(204).json({
    status: "success",
    data: null
  });
});
