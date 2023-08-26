const AppError = require("./../utils/appError");

const handleCastErrorDB = (err) => {
  new AppError(`Invalid ${err.path} : ${err.value}`, 400);
};

const handleDuplicateFieldDB = (err) => {
  //can use regex to find error field value.
  new AppError("Duplicate Value for a field. Try changing values", 400);
};

const handleValidationErrorDB = (err) => {
  const errorsArr = Object.values(err.errors).map((el) => el.message);
  return new AppError(`Validation Error : ${errorsArr.join(". ")}`, 400);
};

const handleJWTError = () => new AppError("Invalid token", 401);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    console.error("ERROR 💥", err);

    res.status(500).json({
      status: "error",
      message: "Something went wrong!"
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (error.name === "CastError") error = handleCastErrorDB();
    if (error.code === "11000") error = handleDuplicateFieldDB();
    if (error.name === "ValidationError") error = handleValidationErrorDB();
    if (error.name === "JsonWebTokenError") error = handleJWTError();
    sendErrorProd(error, res);
  }
};
