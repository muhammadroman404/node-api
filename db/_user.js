const mongoose = require("mongoose");
const validator = require("validator");
const _userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required!"],
  },
  userName: {
    type: String,
    unique:true,
    required: [true, "User Name is required!"],
  },
  address: {
    type: String,
    required: [true, "Address is required!"],
  },
  hash_password: {
    type: String,
    required: [true, "Password is required!"],
  },
  contact: {
    type: String,
    unique:true,
    required: [true, "Contact Number is required!"],
  },
  email: {
    type: String,
    unique:true,
    required: [true, "Email is required!"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please enter a valid E-mail!");
      }
    },
  },
  role: {
    type: String,
    required: [true, "Role is required!"],
  },
});
const UserSchema = mongoose.model("user", _userSchema);
module.exports = UserSchema;
