const express = require("express");
const Order = require("../models/Orders");
const router = express.Router();

router.get("/", (req, res) => {
  Order.find()
    .exec()
    .then((order) => res.status(200).send(order));
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Order.findById(id)
    .exec()
    .then((order) => res.status(200).send(order));
});

router.post("/", (req, res) => {
  Order.create(req.body).then((order) => res.status(201).send(order));
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  Order.findByIdAndUpdate(id, req.body).then((order) => res.sendStatus(204));
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Order.findByIdAndDelete(id)
    .exec()
    .then((order) => res.sendStatus(204));
});

module.exports = router;
