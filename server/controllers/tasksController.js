const Task = require("./../models/taskModel");
const catchAsync = require("./../utils/catchAsync");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");

exports.getAllTasks = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Task.find(), req.query).filter().sort();
  const tasks = await features.query;
  res.status(200).json({
    status: "success",
    data: {
      tasks
    }
  });
});

exports.getTask = catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
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

exports.getTasks = catchAsync(async (req, res, next) => {
  const tasks = await Task.findOne({
    location: req.body.location,
    category: req.body.category
  });
  if (!tasks) {
    return next(new AppError("No tasks", 404));
  }
  res.status(200).json({
    status: "success",
    tasks
  });
});

exports.updateTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!task) {
    return next(new AppError("No task with that id ", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      task
    }
  });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return next(new AppError("No task found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null
  });
});

exports.createTask = catchAsync(async (req, res, next) => {
  const newTask = await Task.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      task: newTask
    }
  });
});
