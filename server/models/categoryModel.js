const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Please provide a category name"]
  },
  subCategories: {
    type: [
      {
        subCategory: String
      }
    ]
  }
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
