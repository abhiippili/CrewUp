const Task = require("./../models/taskModel");
const catchAsync = require("./../utils/catchAsync");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const User = require("../models/userModel");

exports.getAllTasks = catchAsync(async (req, res, next) => {
  const query = Task.find();
  let features = new APIFeatures(query, req.query);
  if (req.query.title) {
    features = new APIFeatures(query, req.query).filter();
  } else if (req.query.sort) {
    features = new APIFeatures(query, req.query).sort();
  } else if (req.query.title && req.query.sort) {
    features = new APIFeatures(query, req.query).filter().sort();
  }
  const tasks = await features.query.populate("category").populate("location");
  res.status(200).json({
    status: "success",
    data: {
      tasks
    }
  });
});

exports.getTask = catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id)
    .populate("category")
    .populate("location");
  if (!task) {
    return next(new AppError("No task with that id", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      task
    }
  });
});

exports.getMyTasks = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate({
    path: "tasks",
    populate: [{ path: "category" }, { path: "location" }]
  });
  res.status(200).json({
    status: "success",
    data: {
      tasks: user.tasks
    }
  });
});

//when updating a task, you are updating the task itself
exports.updateTask = catchAsync(async (req, res, next) => {
  const newTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!newTask) {
    return next(new AppError("No task with that id ", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      newTask
    }
  });
});

//when deleting a task, you also need to delete the task from the tasks array of the user
exports.deleteTask = catchAsync(async (req, res, next) => {
  const arr = req.user.tasks;
  const result = arr.find((el) => parseInt(el) === parseInt(req.params.id));
  if (req.user.role === "user" && !result) {
    return next(new AppError("You are not allowed to delete this task", 404));
  }
  const task = await Task.findByIdAndDelete(req.params.id);
  await User.updateOne(
    { _id: req.user._id },
    { $pull: { tasks: req.params.id } }
  );
  if (!task) {
    return next(new AppError("No task found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: "xyz"
  });
});

//when creating, the new id should be pushed to the tasks array- can be done using tasks.push(newTask) and doc.save()
exports.createTask = catchAsync(async (req, res, next) => {
  const newTask = await Task.create(req.body);
  await User.updateOne({ _id: req.user._id }, { $push: { tasks: newTask } });
  res.status(201).json({
    status: "success",
    data: {
      task: newTask
    }
  });
});
