const usersRouter = require("./routes/usersRouter");
const tasksRouter = require("./routes/tasksRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const portfoliosRouter = require("./routes/portfoliosRouter");
const locationsRouter = require("./routes/locationsRouter");
const globalErrorHandler = require("./controllers/errorController");

const express = require("express");
const cors = require("cors");

const app = new express();
app.use(express.json());
app.use(cors());

//route middlewares
app.use("/api/users", usersRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/users", usersRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/locations", locationsRouter);
app.use("/api/portfolios", portfoliosRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find any resource ${req.url}`, 404));
});

//global error handler
app.use(globalErrorHandler);

module.exports = app;
