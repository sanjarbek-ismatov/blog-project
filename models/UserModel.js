const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("users", userSchema);
module.exports = User;
