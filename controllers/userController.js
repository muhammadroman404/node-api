"use strict";
const _user = require("../db/_user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authConfig = require("../config/auth.config");
exports.register = async (req, res) => {
  try {
    let data = new _user(req.body);
    data.hash_password = bcrypt.hashSync(req.body.password, 10);
    let result = await data.save();
    result.hash_password = undefined
    res.status(201).send(await result);
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).send(errors);
    }
    res.status(500).send("Something went wrong");
  }
};
exports.login = async (req, res) => {
  const userViaClient = await _user.findOne({ email: req.body.email });
  if (userViaClient) {
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      userViaClient.hash_password
    );

    if (!isPasswordValid) {
      return res.status(400).send({
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ id: userViaClient.id }, authConfig.secret, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });
    res.status(200).json({
      id: userViaClient._id,
      username: userViaClient.username,
      email: userViaClient.email,
      role: userViaClient.role,
      accessToken: token,
    });
  } else {
    return res
      .status(404)
      .json({ message: "User with this email does not exist!" });
  }
};