//imports
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const _category = require("../db/_category");
const express = require("express");
const { verifyToken, hasRole } = require("../services/TokenService");
const router = express.Router();
//API routes

router
  .route("/")
  .get([verifyToken,hasRole(['ADMIN','CUSTOMER'])],async (req, res, next) => {
    let data = await _category.find({});
    res.send(data);
  })

  .post([verifyToken,hasRole(['ADMIN'])],async(req, res, next) => {
    let data = new _category(req.body);
    console.warn(req.body);
    let result = await data.save();
    res.send(result);
  });
router
  .route("/:id")
  .get([verifyToken,hasRole(['ADMIN','CUSTOMER'])],async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let result = await _category.find({ _id: id });
    res.send(result);
  })
  .put([verifyToken,hasRole(['ADMIN'])],async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let data = await _category.updateOne(
        {_id:id},
        {
         $set:req.body
        }
    )
    res.send(data);
  })
  .delete([verifyToken,hasRole(['ADMIN'])],async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let data = await _category.deleteOne({_id:id})
    res.send(data);
  });

//exports
module.exports = router;
