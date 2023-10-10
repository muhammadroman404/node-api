//imports
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const _company = require("../db/_company");
const express = require("express");
const { verifyToken,hasRole} = require("../services/TokenService");
const router = express.Router();
router
  .route("/")
  .get([verifyToken,hasRole(['ADMIN','CUSTOMER'])],async (req, res,next) => {
    try {
      let data = await _company.find({});
      // Use the async/await syntax to wait for the Promise
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  }).post([verifyToken,hasRole(['ADMIN'])], async (req, res, next) => {
    try {
      res.status(403).send({ error: "A company cannot be added!" });
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  });
router
  .route("/:id")
  .get([verifyToken,hasRole(['ADMIN','CUSTOMER'])],async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let result = await _company.find({ _id: id });
    res.status(200).send(result);
  })
  .put([verifyToken,hasRole(['ADMIN'])],async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let data = await _company.updateOne(
        {_id:id},
        {
         $set:req.body
        }
    )
    if(data.modifiedCount == 1){
      res.status(200).send(req.body);
    }
    else{
      res.status(200).send({message:'No changes was detected!'});
    }
  })
  .delete([verifyToken,hasRole(['ADMIN'])],async (req, res, next) => {
    res.status(403).send({error:"A company cannot be deleted!"})
  });

//exports
module.exports = router;
