//imports
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const _user = require("../db/_user");
const express = require("express");
const router = express.Router();
const userHandlers = require('../controllers/userController');
const verifySignUp = require("../services/verifySignUp");
router
  .route("/")
  .post(userHandlers.login);

//exports
module.exports = router;
