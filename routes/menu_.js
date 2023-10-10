//imports
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const _menu = require("../db/_menu");
const express = require("express");
const { verifyToken, hasRole} = require("../services/TokenService");
const router = express.Router();
router
  .route("/")
  .get([verifyToken,hasRole(['ADMIN','CUSTOMER'])],async (req, res, next) => {
    let data = await _menu.find({});
    res.send(data);
  })

  .post([verifyToken,hasRole(['ADMIN'])],async (req, res, next) => {
    let data = new _menu(req.body);
    let result = await data.save();
    res.send(result);
  });
router
  .route("/:id")
  .get([verifyToken,hasRole(['ADMIN','CUSTOMER'])],async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let result = await _menu.find({ _id: id });
    res.send(result);
  })
  .put([verifyToken,hasRole(['ADMIN'])],async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let data = await _menu.updateOne(
        {_id:id},
        {
         $set:req.body
        }
    )
    res.send(data);
  })
  .delete([verifyToken,hasRole(['ADMIN'])],async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let data = await _menu.deleteOne({_id:id})
    res.send(data);
  });

//exports
module.exports = router;
