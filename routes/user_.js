//imports
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const _user = require("../db/_user");
const express = require("express");
const router = express.Router();
const userHandlers = require('../controllers/userController');
const verifySignUp = require("../services/verifySignUp");
const { isUser, customerMiddleware } = require("../services/permissions");
const { verifyToken } = require("../services/TokenService");
router
  .route("/")

  .get([verifyToken],async (req, res, next) => {
    let data = await _user.find({});
    res.send(data);
  })
  .post(
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted,userHandlers.register);

router
  .route("/:id")

  .get(async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let result = await _user.find({ _id: id });
    res.send(result);
  })
  .put(
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted,
    async (req, res, next) => {
    try{
      let id = new ObjectId(req.params.id);
      let data = await _user.updateOne(
          {_id:id},
          {
           $set:req.body
          },
          {runValidators: true}
      )
      res.status(200).send(data);
    }
    catch(error){
      if (error.name === "ValidationError") {
        let errors = {};
        Object.keys(error.errors).forEach((key) => {
          errors[key] = error.errors[key].message;
        });
        return res.status(400).send(errors);
      }
      res.status(500).send("Something went wrong");
    }
  })
  .delete(async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let data = await _user.deleteOne({_id:id})
    res.status(204).send(data);
  });

//exports
module.exports = router;
