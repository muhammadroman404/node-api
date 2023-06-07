//imports
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const _customer = require("../db/_customer");
const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json({ limit: '10mb' }));

//API routes

router
  .route("/")
  .get(async (req, res, next) => {
    let data = await _customer.find({});
    res.send(data);
    console.warn(req.body);
  })

  .post((req, res, next) => {
    let data = new _customer(req.body);
    console.warn(req.body);
    // let result = await data.save();
    res.send(req.body);
  });
router
  .route("/:id")
  .get(async (req, res, next) => {
    // let id = req.params.id
    let id = new ObjectId(req.params.id);
    let result = await _customer.find({ _id: id });
    res.send(`GET admin by Id works ${result}`);
  })
  .put(async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    // let data = await _admin.updateOne(
    //     {_id:id},
    //     {
    //      $set:req.body
    //     }
    // )
    // res.send(`PUT admin works ${data}`);
  })
  .delete(async (req, res, next) => {
    let id = new ObjectId(req.params.id);
    let data = await _customer.deleteOne({_id:id})
    res.send(`DELETE admin works ${data}`);
  });

//exports
module.exports = router;
