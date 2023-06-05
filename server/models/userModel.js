const mongoose = require("mongoose");
const validator = require("validator");
const bcrpyt = require("bcrypt");
const catchAsync = require("../utils/catchAsync");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    unique: true,
    lowercase: true,
    trim: true
    // validate: [validator.isEmail, "Please provide a valid email address"]
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 8,
    select: false
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm password"],
    validate: {
      validator: function (el) {
        return el == this.password;
      },
      message: "The passwords do not match"
    }
  },
  //just to illustrate roles as well
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please provide phone number"],
    trim: true
  },
  dateOfBirth: {
    type: String,
    required: [true, "Please provide date of birth"]
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String,
    required: [true, "Please provide city name"]
  },
  changedPasswordTime: Date
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrpyt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = catchAsync(async function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
});

userSchema.methods.changedPasswordAfter = function (iat) {
  if (this.changedPasswordTime) {
    return iat < parseInt(this.changedPasswordTime.getTime() / 1000, 10);
  }
  return false;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
