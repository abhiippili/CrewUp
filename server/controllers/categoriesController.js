const catchAsync = require("../utils/catchAsync");
const Category = require("./../models/categoryModel");

exports.getAllCategories = catchAsync(async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json({
    status: "success",
    data: {
      categories
    }
  });
});
