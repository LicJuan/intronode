const express = require("express");
const Meal = require("../models/Meals");
const router = express.Router();

router.get("/", (req, res) => {
  Meal.find()
    .exec()
    .then((meal) => res.status(200).send(meal));
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Meal.findById(id)
    .exec()
    .then((meal) => res.status(200).send(meal));
});

router.post("/", (req, res) => {
  Meal.create(req.body).then((meal) => res.status(201).send(meal));
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  Meal.findByIdAndUpdate(id, req.body).then((meal) => res.sendStatus(204));
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Meal.findByIdAndDelete(id)
    .exec()
    .then((meal) => res.sendStatus(204));
});

module.exports = router;
